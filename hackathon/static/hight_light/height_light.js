/**
 * @author xinghen
 */


function select_type (type)
{
	switch(type)
	{
	case 'java':
		$('#code_area').attr('class','');
		$('#code_area').attr('class' ,'brush:java')
		break;
	case 'c':
	case 'cpp':
		$('#code_area').attr('class','');
		$('#code_area').attr('class' ,'brush:c');
		break;
	// case 'c#':
	// case 'csharp':
		// $('#code_area').attr('class','');
		// $('#code_area').attr('class' ,'brush:C++')
		// break;
	case 'css':
		$('#code_area').attr('class','');
		$('#code_area').attr('class' ,'brush:css');
		break;
	case 'js':
		$('#code_area').attr('class','');
		$('#code_area').attr('class' ,'brush:js');
		break;
	case 'php':
		$('#code_area').attr('class','');
		$('#code_area').attr('class' ,'brush:php');
		break;
	case 'xml':
	case 'html':
		$('#code_area').attr('class','');
		$('#code_area').attr('class' ,'brush:html');
		break;			
	case 'py':
		$('#code_area').attr('class','');
		$('#code_area').attr('class' ,'brush:python');
		break;
	}
	
}
