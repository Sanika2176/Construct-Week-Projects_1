import java.util.Scanner;

// Custom Exception for Invalid Age
class InvalidAgeException extends Exception {
    // Constructor for the custom exception
    public InvalidAgeException(String message) {
        super(message);  // Pass the exception message to the superclass
    }
}

// Account Class
class Account {
    private String accountNumber;  // Variable to store the account number
    private double balance;        // Variable to store the balance of the account

    // Constructor to initialize account number and set balance to 0
    public Account(String accountNumber) {
        this.accountNumber = accountNumber;
        this.balance = 0.0;  // Initial balance set to 0
    }

    // Method to deposit money into the account
    public void deposit(double amount) {
        balance += amount;  // Add the deposited amount to the current balance
        System.out.printf("Deposited %.1f successfully.%n", amount);  // Confirmation message
    }

    // Method to withdraw money from the account
    public void withdraw(double amount) {
        if (balance >= amount) {  // Check if the balance is sufficient for withdrawal
            balance -= amount;  // Subtract the withdrawal amount from the balance
            System.out.printf("Withdrew %.1f successfully.%n", amount);  // Confirmation message
        } else {
            System.out.println("Error: Insufficient funds. Withdrawal is not allowed.");  // Error message if insufficient balance
        }
    }

    // Method to get the final balance of the account
    public double getBalance() {
        return balance;  // Return the current balance
    }
}

// Main Class
public class Project {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);  // Create a scanner object for user input

        // Account Creation and Operations
        System.out.print("Enter account number: ");
        String accountNumber = scanner.nextLine();  // Read the account number from the user
        Account account = new Account(accountNumber);  // Create a new Account object

        // Deposit operation
        System.out.print("Deposit amount: ");
        double depositAmount = scanner.nextDouble();  // Read the deposit amount from the user
        account.deposit(depositAmount);  // Call the deposit method

        // First withdrawal operation
        System.out.print("Withdraw amount: ");
        double withdrawAmount1 = scanner.nextDouble();  // Read the withdrawal amount
        account.withdraw(withdrawAmount1);  // Call the withdraw method

        // Second withdrawal operation
        System.out.print("Withdraw amount: ");
        double withdrawAmount2 = scanner.nextDouble();  // Read another withdrawal amount
        account.withdraw(withdrawAmount2);  // Call the withdraw method

        // Print the final balance after all transactions
        System.out.printf("Final balance: %.1f%n", account.getBalance());

        // Age Validation
        try {
            System.out.print("Enter age: ");
            int age = scanner.nextInt();  // Read the user's age
            validateAge(age);  // Validate the age using the custom method
            System.out.println("Valid age: " + age);  // If valid, print the age
        } catch (InvalidAgeException e) {  // Catch the custom exception if invalid age is entered
            System.out.println("Error: " + e.getMessage());  // Print the exception message
        }

        scanner.close();  // Close the scanner object to prevent resource leaks
    }

    // Method to validate age
    public static void validateAge(int age) throws InvalidAgeException {
        if (age <= 0) {  // If the age is less than or equal to 0, it's considered invalid
            throw new InvalidAgeException("Age must be greater than 0.");  // Throw the custom exception
        }
    }
}
