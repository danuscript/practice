
import java.util.Scanner;

public class LeapYear {

    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        System.out.println("Give a year:");
        
        int year = Integer.valueOf(scan.nextLine());
        int divByFour = (year % 4);
        int divBy100 = (year % 100);
        int divBy400 = (year % 400);
        
        if (divBy100 == 0 && divBy400 == 0) {
            System.out.println("This year is a leap year.");
        } else if (divBy100 == 0) {
            System.out.println("This year is not a leap year.");
        } else if (divByFour == 0) {
            System.out.println("This year is a leap year.");
        } else {
            System.out.println("This year is not a leap year.");
        }
    }
}
