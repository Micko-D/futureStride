<?php
header("Content-Type: application/json");

include "../config/config.php";
include "../classes/product.php";

// Instantiate database and product objects
$database = new Database();
$db = $database->getConnection();
$product = new Product($db);

// Function to build SQL query with filters
function buildQuery($filters) {
    $query = "SELECT * FROM products WHERE 1=1"; // Start with base query

    if (isset($filters['price']) && is_numeric($filters['price'])) {
        $query .= " AND price <= ?";
    }
    
    if (isset($filters['color']) && !empty($filters['color'])) {
        $query .= " AND color = ?";
    }
    
    if (isset($filters['gender']) && !empty($filters['gender'])) {
        $genderPlaceholders = implode(',', array_fill(0, count($filters['gender']), '?'));
        $query .= " AND gender IN ($genderPlaceholders)";
    }

    $query .= " ORDER BY price"; // Adjust as needed for sorting

    return $query;
}

// Get filter values from query parameters
$filters = array(
    'price' => isset($_GET['price']) ? $_GET['price'] : null,
    'color' => isset($_GET['color']) && $_GET['color'] !== 'all' ? $_GET['color'] : null,
    'gender' => array()
);

if (isset($_GET['men']) && $_GET['men'] == 'true') {
    $filters['gender'][] = 'Men';
}

if (isset($_GET['women']) && $_GET['women'] == 'true') {
    $filters['gender'][] = 'Women';
}

// Build SQL query with filters
$query = buildQuery($filters);
$stmt = $db->prepare($query);

// Bind parameters if they exist
$paramIndex = 1;

if (isset($filters['price']) && is_numeric($filters['price'])) {
    $stmt->bindValue($paramIndex++, $filters['price'], PDO::PARAM_INT);
}

if (isset($filters['color']) && !empty($filters['color'])) {
    $stmt->bindValue($paramIndex++, $filters['color'], PDO::PARAM_STR);
}

if (!empty($filters['gender'])) {
    foreach ($filters['gender'] as $gender) {
        $stmt->bindValue($paramIndex++, $gender, PDO::PARAM_STR);
    }
}

try {
    $stmt->execute();
    $num = $stmt->rowCount();

    if ($num > 0) {
        $products_arr = array();
        $products_arr["records"] = array();

        while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
            extract($row);
            $product_item = array(
                "id" => $id,
                "name" => $name,
                "price" => $price,
                "discount" => $discount,
                "image" => $image,
                "color" => $color,
                "gender" => $gender
            );
            array_push($products_arr["records"], $product_item);
        }
        echo json_encode($products_arr);
    } else {
        echo json_encode(array("message" => "No products found."));
    }
} catch (Exception $e) {
    error_log("Error: " . $e->getMessage());
    echo json_encode(array("message" => "Error: " . $e->getMessage()));
}
?>
