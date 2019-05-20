import $ from 'jquery';
import '../styles/styles.scss';

$(document).ready(() => {
    
    
    $('select').formSelect();
    
    //volunteer form starts
    //phone formatting
    function phoneFormatter() {
		$('#number').on('input', function () {
			let number = $(this).val().replace(/[^\d]/g, '');
			if (number.length == 7) {
				number = number.replace(/(\d{3})(\d{4})/, '$1-$2');
			} else if (number.length == 10) {
				number = number.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');
			}
			$(this).val(number);
		});
    }
    
    $(phoneFormatter);

    

    $('#contactSubmit').click(() => {
		let name = $('#name').val();
		let email = $('#email').val();
		let message = $('#message').val();

		fetch('https://pmmweekend.com/contact', {
			method: 'POST',
			body: JSON.stringify({
				name: name, email: email, message: message
			}),
			headers: {
				'Content-Type': 'application/json'
			}
		})
			.then((res) => {
				res.send(200);
				setTimeout(() => {
					window.location.reload();
				}, 10);
			})
			.catch((error) => {
				return Error(error);
			});
    });
    //volunteer form
})