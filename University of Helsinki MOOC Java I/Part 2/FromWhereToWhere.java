
import java.util.Scanner;

public class FromWhereToWhere {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.println("Where to?");
        int answer = Integer.valueOf(scanner.nextLine());
        
        for (int i = 1; i < (answer + 1); i++) {
            
            System.out.println(i);
        }
        
        System.out.println("Where to?");
        int endPoint = Integer.valueOf(scanner.nextLine());
        System.out.println("Where from?");
        int startPoint = Integer.valueOf(scanner.nextLine());
        
        for (int i2 = startPoint; i2 < (endPoint + 1); i2++) {
            
            System.out.println(i2);
        }
        
    }
}
