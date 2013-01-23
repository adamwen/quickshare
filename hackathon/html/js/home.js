/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

var short_url = '';

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
        var reg = /(6543) + /g;
        
        $.ajax({
                type: 'POST',
                url: 'http://10.42.0.1:6543/get_info',
                dataType: 'JSON',
                data: {
                        'short_url': Hn4bqm
                },
                success: function(){
                        alert('Success!');
                }
        })
});