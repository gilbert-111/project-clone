function myFunction() {
    document.querySelector('.dropdown-content').classList.toggle('show');
    document.querySelector('.dropdown-content-2').classList.remove('show-2');
  }

  function mySecondFunction() {
    document.querySelector('.dropdown-content-2').classList.toggle('show-2');
    document.querySelector('.dropdown-content').classList.remove('show');
  }

  function setTwoNumberDecimal(event){
    this.value = parseFloat(this.value).toFixed(2);
  };