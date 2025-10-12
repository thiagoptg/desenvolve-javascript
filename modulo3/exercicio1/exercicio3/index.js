import java.time.Duration;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.Scanner;

public class ContagemRegressiva {

    // Função para calcular o tempo restante até a data futura
    public static Duration calcularTempoRestante(LocalDateTime dataFutura) {
        LocalDateTime agora = LocalDateTime.now();
        if (agora.isAfter(dataFutura)) {
            return Duration.ZERO;
        }
        return Duration.between(agora, dataFutura);
    }

    // Função para formatar a duração em dias, horas, minutos e segundos
    public static String formatarDuracao(Duration duracao) {
        long segundosTotais = duracao.getSeconds();

        long dias = segundosTotais / (3600 * 24);
        long horas = (segundosTotais % (3600 * 24)) / 3600;
        long minutos = (segundosTotais % 3600) / 60;
        long segundos = segundosTotais % 60;

        return String.format("%dd %02dh %02dm %02ds", dias, horas, minutos, segundos);
    }

    public static void main(String[] args) throws InterruptedException {
        Scanner scanner = new Scanner(System.in);

        System.out.println("Digite a data futura no formato yyyy-MM-dd HH:mm:ss");
        String input = scanner.nextLine();

        DateTimeFormatter formatter = Dat
