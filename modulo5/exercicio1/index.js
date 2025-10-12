import javafx.animation.KeyFrame;
import javafx.animation.Timeline;
import javafx.application.Application;
import javafx.geometry.Pos;
import javafx.scene.Scene;
import javafx.scene.control.Label;
import javafx.scene.layout.VBox;
import javafx.scene.text.Font;
import javafx.scene.text.TextAlignment;
import javafx.stage.Stage;
import javafx.util.Duration;

import java.time.Duration;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

public class ContagemRegressiva extends Application {

    private Label labelContagem;
    private LocalDateTime dataFutura;

    // Função para calcular o tempo restante
    private Duration calcularTempoRestante() {
        LocalDateTime agora = LocalDateTime.now();
        if (agora.isAfter(dataFutura)) {
            return Duration.ZERO;
        }
        return Duration.between(agora, dataFutura);
    }

    // Função para formatar a duração
    private String formatarDuracao(Duration duracao) {
        long segundosTotais = duracao.getSeconds();
        long dias = segundosTotais / (3600 * 24);
        long horas = (segundosTotais % (3600 * 24)) / 3600;
        long minutos = (segundosTotais % 3600) / 60;
        long segundos = segundosTotais % 60;

        return String.format("%dd %02dh %02dm %02ds", dias, horas, minutos, segundos);
    }

    @Override
    public void start(Stage primaryStage) {
        // Definir a data futura para a contagem regressiva
        String dataEntrada = "2025-12-31 23:59:59";  // Pode ser alterada
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");
        dataFutura = LocalDateTime.parse(dataEntrada, formatter);

        // Criar o Label para mostrar o tempo
        labelContagem = new Label("Carregando...");
        labelContagem.setFont(new Font("Arial", 30));
        labelContagem.setTextAlignment(TextAlignment.CENTER);

        // Layout
        VBox vbox = new VBox(20);
        vbox.setAlignment(Pos.CENTER);
        vbox.getChildren().add(labelContagem);

        // Criar a cena
        Scene scene = new Scene(vbox, 400, 200);

        // Criar o Timeline para atualizar o temporizador a cada segundo
        Timeline timeline = new Timeline(
                new KeyFrame(Duration.seconds(1), e -> {
                    Duration tempoRestante = calcularTempoRestante();
                    if (tempoRestante.isZero() || tempoRestante.isNegative()) {
                        labelContagem.setText("Tempo esgotado!");
                    } else {
                        labelContagem.setText("Tempo restante: " + formatarDuracao(tempoRestante));
                    }
                })
        );
        timeline.setCycleCount(Timeline.INDEFINITE);
        timeline.play();

        // Definir o palco (janela)
        primaryStage.setTitle("Contagem Regressiva");
        primaryStage.setScene(scene);
        primaryStage.show();
    }

    public static void main(String[] args) {
        launch(args);
    }
}
