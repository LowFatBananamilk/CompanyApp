import React from 'react';

export default function Map({ latitude, longitude, zoom }: { latitude: number, longitude: number, zoom: number }) {
    if (latitude === 35.724136980121614)
        return (
            <div className="google-map-code">
                <iframe
                    title="Google Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3239.0575261197673!2d129.27969867653874!3d35.72480372757796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x35664afed262e2d3%3A0xba15ca51a1dc76eb!2z7ZWc7KeE7ZS87JeY!5e0!3m2!1sko!2skr!4v1722608031096!5m2!1sko!2skr"
                    width="100%"
                    height="400"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                >
                </iframe>
            </div>
        );
    else
        return (
            <div className="google-map-code">
                <iframe
                    title="Google Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1257.8641226315228!2d129.34269737954526!3d35.661613840187066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3567ca985e65c077%3A0x2b97818f681f4555!2z7Iug7KeE7JeU7KeA64uI7Ja066eB!5e0!3m2!1sko!2skr!4v1722608442670!5m2!1sko!2skr"
                    width="100%"
                    height="400"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                >
                </iframe>
            </div>
        );
};
