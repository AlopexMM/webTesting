import pytest
from selenium.webdriver import Chrome
@pytest.fixture(scope='function')
def chrome_driver():
    driver = Chrome()
    driver.get('file:///C:/Users/marmori/webTestingWithPython/webapp/index.html')
    yield driver

    driver.quit()