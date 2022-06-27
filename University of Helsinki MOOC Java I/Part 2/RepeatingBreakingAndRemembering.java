
import java.util.Scanner;

public class RepeatingBreakingAndRemembering {

    public static void main(String[] args) {
        
        
        Scanner scanner = new Scanner(System.in);
        
        
        System.out.println("Give numbers:");
        
        int sum = 0;
        int numberOfNumbers = 0;
        int evenNumbers = 0;
        int oddNumbers = 0;
        
        while (true) {
            
            int number = Integer.valueOf(scanner.nextLine());
            
            if (number == -1) {
                
                break;
            }
            
            sum = sum + number;
            numberOfNumbers++;
            
            int remainder = number % 2;
            if (remainder == 0) {
                
                evenNumbers++;
                
            } else {
                
                oddNumbers++;
            }
            
        }
        
        double avg = 1.0 * sum / numberOfNumbers;
        
        System.out.println("Thx! Bye!");
        System.out.println("Sum: " + sum);
        System.out.println("Numbers: " + numberOfNumbers);
        System.out.println("Average: " + avg);
        System.out.println("Even: " + evenNumbers);
        System.out.println("Odd: " + oddNumbers);

    }
}
