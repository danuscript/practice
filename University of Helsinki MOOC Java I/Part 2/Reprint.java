
import java.util.Scanner;

public class Reprint {

    public static void main(String[] args) {
        
        
        Scanner scanner = new Scanner(System.in);
        System.out.println("How many times?");
        int number = Integer.valueOf(scanner.nextLine());
        int numberSoFar = 0;
        
        while (true) {
        
            if (numberSoFar == number) {
                
                break;
            }
            printText();
            numberSoFar++;
            
        }
        
    }
    
    public static void printText() {
        System.out.println("In a hole in the ground there lived a method");
    }
}
