import java.util.Scanner; abstract class BankAccount {     private String accountNumber;     private String accountHolderName;     private double balance; 
 
    public BankAccount(String accountNumber, String accountHolderName, double balance) { 
        this.accountNumber = accountNumber;         this.accountHolderName = accountHolderName;         this.balance = balance; 
    } 
 
    public String getAccountNumber() {         return accountNumber; 
    } 
 
    public void setAccountNumber(String accountNumber) {         this.accountNumber = accountNumber; 
    } 
 
    public String getAccountHolderName() {         return accountHolderName; 
    } 
 
    public void setAccountHolderName(String accountHolderName) {         this.accountHolderName = accountHolderName; 
    } 
 
    public double getBalance() {         return balance; 
    } 
 
    public void deposit(double amount) { 
        if (amount > 0) {             balance += amount; 
            System.out.println("Successfully deposited ₹" + amount); 
        } else { 
            System.out.println("Invalid deposit amount."); 
        } 
    } 
 
    public abstract void calculateInterest(); 
 
    public void displayDetails() { 
        System.out.println("\n--- Account Details ---"); 
        System.out.println("Account Number: " + accountNumber); 
        System.out.println("Account Holder: " + accountHolderName); 
        System.out.println("Current Balance: ₹" + balance); 
    } 
} 
 
class SavingsAccount extends BankAccount {     private double interestRate = 4.5; // 4.5% annual interest rate     public SavingsAccount(String accountNumber, String accountHolderName, double balance) {         super(accountNumber, accountHolderName, balance); // Calling parent constructor 
    } 
 
    @Override     public void calculateInterest() { 
        double interest = (getBalance() * interestRate) / 100; 
        System.out.println("Estimated Annual Interest Earned (at 4.5%): ₹" + interest); 
    } 
} 
 
class CurrentAccount extends BankAccount {     private double interestRate = 1.2; // 1.2% annual interest rate 
 
    public CurrentAccount(String accountNumber, String accountHolderName, double balance) {         super(accountNumber, accountHolderName, balance); // Calling parent constructor 
    } 
 
    @Override     public void calculateInterest() { 
        double interest = (getBalance() * interestRate) / 100; 
        System.out.println("Estimated Annual Interest Earned (at 1.2%): ₹" + interest); 
    } 
} 
 
public class BankManagementSystem {     public static void main(String[] args) { 
        Scanner scanner = new Scanner(scanner.in); 
 
        System.out.println("Welcome to the Bank Management System"); 
        System.out.print("Enter Account Number: "); 
        String accNum = scanner.nextLine(); 
         
        System.out.print("Enter Account Holder Name: "); 
        String name = scanner.nextLine(); 
         
        System.out.print("Enter Initial Balance: ");         double initialBalance = scanner.nextDouble(); 
 
        System.out.println("\nSelect Account Type:"); 
        System.out.println("1. Savings Account");         System.out.println("2. Current Account");         System.out.print("Choice (1 or 2): ");         int choice = scanner.nextInt(); 
 
        BankAccount account = null; 
 
        if (choice == 1) { 
            account = new SavingsAccount(accNum, name, initialBalance); 
        } else if (choice == 2) { 
            account = new CurrentAccount(accNum, name, initialBalance); 
        } else { 
            System.out.println("Invalid choice. Exiting application.");             scanner.close();             return; 
        } 
        System.out.print("\nEnter amount to deposit: ");         double depositAmt = scanner.nextDouble();         account.deposit(depositAmt);         account.displayDetails();         account.calculateInterest(); 
 
        scanner.close(); 
    } 
} 
