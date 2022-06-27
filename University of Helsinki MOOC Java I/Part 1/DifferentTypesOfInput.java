
import java.util.Scanner;

public class DifferentTypesOfInput {

    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);

      System.out.println("Give a string:");
      String text = scan.nextLine();
      System.out.println("Give an integer:");
      int wholeNumber = Integer.valueOf(scan.nextLine());
      System.out.println("Give a double:");
      double decimalNumber = Double.valueOf(scan.nextLine());
      System.out.println("Give a boolean:");
      boolean yesOrNo = Boolean.valueOf(scan.nextLine());
        System.out.println("You gave the string " + text);
        System.out.println("You gave the integer " + wholeNumber);
        System.out.println("You gave the double " + decimalNumber);
        System.out.println("You gave the boolean " + yesOrNo);

    }
}
