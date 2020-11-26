import java.util.*;

public class Test {

    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        int n = scan.nextInt();

        Map<Integer, String> map = new HashMap<>();
        int min = Integer.MAX_VALUE;

        for(int i=0;i<n;i++){
            int num = scan.nextInt();
            map.put(num, scan.next());

            if(min>num){
                min = num;
            }
        }
        System.out.println(map.get(min));
    }
}
