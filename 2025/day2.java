import java.io.*;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.Collections;
import java.util.List;
import java.util.regex.*;

public class day2 {
     public static List<String> readFileInList(String fileName)
    {
        // Created List of String
        List<String> lines = Collections.emptyList();
        
      	try {
            lines = Files.readAllLines(
                Paths.get(fileName),
                StandardCharsets.UTF_8);
        } catch(IOException e) {
            e.printStackTrace();
        }
      
        return lines;
    }
    public static void main(String[] args) throws Exception {
        List<String> data = readFileInList("C:\\GitHub\\AdventOfCode\\2025\\day2.txt");
        String myStr = data.get(0);
        String[] myArr = myStr.split(",");

        long sum = 0;
        Pattern pattern = Pattern.compile("0");
        Matcher matcher = pattern.matcher("");

        for (String range : myArr) {
            String[] myRange = range.split("-");
            long start = (long) Long.parseLong(myRange[0]);
            long end = (long) Long.parseLong(myRange[1]);
            for (long i = start; i <= end; i++) {
                boolean isInvalid = false;
                String num = i + "";
                int len = num.length();
                for (int j = 0; j < len/2; j++) {
                    String pat = num.substring(0, j);
                    pattern = Pattern.compile(pat);
                    if (len - pat.length() % pat.length() == 0) {
                        
                    }
                }
            }
            break;
        }
        System.out.println(sum);
    }
}
