import pytest
from selenium.webdriver import Chrome

pytest_plugins = []
@pytest.fixture(scope='function')
def chrome_driver():
    driver = Chrome()
    driver.get('file:///C:/Users/marmori/webTesting/webapp/index.html')
    yield driver

    driver.quit()