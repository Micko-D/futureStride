<?php
class User {
    private $conn;
    private $table_name = "users";

    public $id;
    public $password;
    public $email;

    public function __construct($db) {
        $this->conn = $db;
    }

    // Check if email already exists
    public function emailExists() {
        $query = "SELECT id FROM " . $this->table_name . " WHERE email = :email";
        $stmt = $this->conn->prepare($query);
        $this->email = htmlspecialchars(strip_tags($this->email));
        $stmt->bindParam(":email", $this->email);
        $stmt->execute();

        return $stmt->rowCount() > 0;
    }

    public function signup() {
        if ($this->emailExists()) {
            return false; // Email already exists
        }

        $query = "INSERT INTO " . $this->table_name . " SET password=:password, email=:email";
        $stmt = $this->conn->prepare($query);

        $this->password = htmlspecialchars(strip_tags($this->password));
        $this->email = htmlspecialchars(strip_tags($this->email));

        $stmt->bindParam(":password", password_hash($this->password, PASSWORD_BCRYPT));
        $stmt->bindParam(":email", $this->email);

        return $stmt->execute();
    }

    public function login() {
        $query = "SELECT id, password FROM " . $this->table_name . " WHERE email = :email";
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(':email', $this->email);
        $stmt->execute();

        if ($stmt->rowCount() > 0) {
            $row = $stmt->fetch(PDO::FETCH_ASSOC);
            if (password_verify($this->password, $row['password'])) {
                $this->id = $row['id'];
                return true;
            }
        }
        return false;
    }
}
?>
