# ajax jquery
let form = $('[id="address-info"]');
$.ajax({
	headers: {
		'Authorization': 'Bearer ' + $.cookie('access_token'),
	},
	type: form.attr('method'),
	url: form.attr('action'),
	data: form.serialize(),
	dataType: 'json',
	success: function (datas, textStatus, jqXHR) {
		location.assign('/characters');
	},
	error: function (jqXHR, textStatus, errorThrown) {
		error_msg(jqXHR);
	},
	beforeSend: function (jqXHR, settings) { }
});
