import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.nio.file.*;
import java.util.Collections;
import java.util.List;

public class day1 {
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
        List<String> data = readFileInList("C:\\GitHub\\AdventOfCode\\2025\\day1.txt");
        int dial = 50;
        int count = 0;
        int increment = 0;
        for (String line : data) {
            String letter = line.substring(0, 1);
            int dir = letter.equals("L") ? -1 : 1;
            int mag = Integer.parseInt(line.substring(1));
            mag = mag * dir;
            System.out.println("start at " + dial + ", spin " + mag + " with count " + count);
            dial = dial + mag;
            if (dial % 100 == 0) {
                increment = (int) Math.floor(dial/100.0);
                System.out.println("click " + increment + " times");
                dial = dial % 100;
                count += increment;
            }
            else if (dial >= 100) {
                increment = (int) Math.floor(dial/100.0);
                System.out.println("click " + increment + " times");
                dial = dial % 100;
                count += increment;
            }
            else if (dial <= 0) {
                increment = (int) Math.abs(Math.floor(dial/100.0));
                System.out.println("click " + increment + " times");
                dial = (100 + (dial % 100)) % 100;
                count += (int) increment;
            }
        }
        System.out.println(count);
}
}


