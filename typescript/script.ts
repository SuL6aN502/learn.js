// الحصول على معلومات الموقع باستخدام navigator.geolocation
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
        let latitude = position.coords.latitude;
        let longitude = position.coords.longitude;

        console.log("الدائرة العرض: " + latitude + ", الخط الطول: " + longitude);

        // يمكنك استخدام هذه المعلومات لتحديد الموقع بشكل دقيق
    }, function(error) {
        console.error("فشل في الحصول على الموقع: " + error.message);
    });
} else {
    console.error("المتصفح لا يدعم خدمة الموقع.");
}

// الحصول على URL الحالي باستخدام window.location
let currentURL = window.location.href;
console.log("الرابط الحالي: " + currentURL);
