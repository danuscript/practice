
import java.util.Scanner;

public class CheckingTheAge {

    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        
        System.out.println("How old are you?");    
        int age = Integer.valueOf(scan.nextLine());
        
        if (age > -1 && age < 121) {
            System.out.println("OK");
        } else {
            System.out.println("Impossible!");
        }

    }
}
