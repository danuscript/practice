
import java.util.Scanner;

public class AverageOfNumbers {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        
        int numbers = 0;
        int sum = 0;
        
        while (true) {
            System.out.println("Give a number:");
            int answer = Integer.valueOf(scanner.nextLine());
            
            if (answer == 0) {
                
                break;
            }
            
            numbers = numbers + 1;
            sum = sum + answer;
            
        }
        
        System.out.println("Average of the numbers: " + (1.0 * sum / numbers));
        
        

    }
}
