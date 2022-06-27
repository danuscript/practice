
import java.util.Scanner;

public class NumberOfNegativeNumbers {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        
        int negNumbers = 0;
        
        while (true) {
            
            System.out.println("Give a number:");
            int answer = Integer.valueOf(scanner.nextLine());
            
            if (answer == 0) {
                break;
            }
            
            if (answer < 0) {
               
                negNumbers = negNumbers + 1;
            }
            
            
                      
        }
        
        System.out.println("Number of negative numbers: " + negNumbers);

    }
}
