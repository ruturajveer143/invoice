$('form#myId input').bind("change", function() {
    var val = $(this).val();
    $(this).attr('value',val);
});

//For 1 Product
function calculate1() {
    var qty0 = document.getElementById('qty0').value;
    var rate1 = document.getElementById('rate1').value;
    var qty2 = document.getElementById('qty2').value;
    var rate2 = document.getElementById('rate2').value;
    var qty3 = document.getElementById('qty3').value;
    var rate3 = document.getElementById('rate3').value;
    var qty4 = document.getElementById('qty4').value;
    var rate4 = document.getElementById('rate4').value;
    var qty5 = document.getElementById('qty5').value;
    var rate5 = document.getElementById('rate5').value;
    var qty6 = document.getElementById('qty6').value;
    var rate6 = document.getElementById('rate6').value;
    var qty7 = document.getElementById('qty7').value;
    var rate7 = document.getElementById('rate7').value;
    var qty8 = document.getElementById('qty8').value;
    var rate8 = document.getElementById('rate8').value;

    var charges = document.getElementById('charges').value;
    var baki = document.getElementById('baki').value;
    

    var total1 = document.getElementById('rate11');
    var total2 = document.getElementById('rate22');
    var total3 = document.getElementById('rate33');
    var total4 = document.getElementById('rate44');
    var total5 = document.getElementById('rate55');
    var total6 = document.getElementById('rate66');
    var total7 = document.getElementById('rate77');
    var total8 = document.getElementById('rate88');


    if (this.value == "" || this.value == 0) {
        

    } else {
        qty0 = (qty0), rate1 = (rate1), total1.innerHTML = qty0 * rate1;
        qty2 = (qty2), rate2 = (rate2), total2.innerHTML = qty2 * rate2;
        qty3 = (qty3), rate3 = (rate3), total3.innerHTML = qty3 * rate3;
        qty4 = (qty4), rate4 = (rate4), total4.innerHTML = qty4 * rate4;
        qty5 = (qty5), rate5 = (rate5), total5.innerHTML = qty5 * rate5;
        qty6 = (qty6), rate6 = (rate6), total6.innerHTML = qty6 * rate6;
        qty7 = (qty7), rate7 = (rate7), total7.innerHTML = qty7 * rate7;
        qty8 = (qty8), rate8 = (rate8), total8.innerHTML = qty8 * rate8;

        var tqty = document.getElementById("tqty").innerHTML = qty0 * 1 + qty2 * 1 + qty3 * 1 + qty4 * 1 + qty5 * 1 + qty6 * 1 + qty7 * 1 + qty8 * 1;

        var amount = document.getElementById("amount").innerHTML = qty0 * rate1 + qty2 * rate2 + qty3 * rate3 + qty4 * rate4 + qty5 * rate5 + qty6 * rate6 + qty7 * rate7 + qty8 * rate8;

        var grandtotal = document.getElementById("grandtotal").innerHTML = charges*1 + baki*1 + amount*1;

    }

}


function printDiv(print) {
    var printContents = document.getElementById(print).innerHTML;
    var originalContents = document.body.innerHTML;

    document.body.innerHTML = printContents;

    window.print();

    document.body.innerHTML = originalContents;
}
