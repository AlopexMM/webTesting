from selenium.webdriver.common.by import By
from selenium.webdriver.support.wait import WebDriverWait
from selenium.webdriver.common.keys import Keys

from time import sleep

import pytest

def test_barcode_label_present(chrome_driver):
    wait = WebDriverWait(chrome_driver, timeout=5)

    # Testing the label
    barcode_text = wait.until(lambda d: chrome_driver.find_element(By.XPATH, '//label[@for="barcode"]'))
    assert barcode_text.text == 'Código de barra:'

def test_barcode_input_error(chrome_driver):

    # Testing the input box
    wait = WebDriverWait(chrome_driver, timeout=5)
    barcode_input = wait.until(lambda d: chrome_driver.find_element(By.XPATH, '//input[@id="barcode"]'))

    barcode_input.send_keys("aaa" + Keys.ENTER)
    #sleep(10)
    alert = chrome_driver.switch_to.alert
    assert alert.text == 'Código no encontrado'

def test_look_for_product():
    pass


def test_register_table():
    pass


def test_total_alert():
    pass


def test_smoke():
    pass
