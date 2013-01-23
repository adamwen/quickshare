/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

$('#myCarousel').carousel({
        interval: false
});

$('#test-button').click(function(){
        
        $('.slide-container').animate({
                top : -800
        }, function(){
                $('.success-container').animate({
                        top : 0
                }, function(){
                        $('.success-container').animate({
                                top : -160
                        }, function(){
                                $('.success-container').animate({
                                        top : 0
                                }, function(){
                                        $('.success-container').animate({
                                                top : -32
                                        }, function(){
                                                $('.success-container').animate({
                                                        top : 0
                                                }, function(){
                                                        
                                                });
                                        });
                                });
                        });
                });
        });   
});

$('#upload-more-button').click(function(){
        window.location = window.location;
});

$(document).ready(function(){
        $.ajax({
                type: 'POST',
                url: 'http://10.42.0.1:6543/get_info',
                dataType: 'JSON',
                data: {
                        'short_url': '099Hbi'
                },
                success: function(){
                        alert('Success!');
                }
        })
});