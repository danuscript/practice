
import java.util.Scanner;

public class AverageOfPositiveNumbers {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        
        int positiveNumbers = 0;
        int sum = 0;
        
        while (true) {
            int answer = Integer.valueOf(scanner.nextLine());
            
            if (answer == 0) {
                
                break;
            }
            
            if (answer > 0) {
                
                sum = sum + answer;
                positiveNumbers = positiveNumbers + 1;
            }
            
        }
        
        if (positiveNumbers == 0) {
            System.out.println("Cannot calculate the average");                      
        } else {
            System.out.println(1.0 * sum / positiveNumbers);
        }

    }
}
