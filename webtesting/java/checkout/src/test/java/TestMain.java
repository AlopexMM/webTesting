import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.annotations.AfterTest;
import org.testng.annotations.BeforeTest;
import org.testng.annotations.Test;

public class TestMain {

    WebDriver driver;
    @BeforeTest
    public void setUp() {
        driver = new ChromeDriver();
        driver.get()
    }

    @AfterTest
    public void setDown() {
        driver.quit();
    }
    @Test(groups = "function")
    public void barcodeTest(){
        driver.get
    }
}
