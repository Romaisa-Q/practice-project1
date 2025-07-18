// components/LocationMapEmbed.js

export default function LocationMapEmbed() {
  return (
    <div className="bg-white p-6">
      <h2 className="text-2xl font-bold mb-2">Where you'll be</h2>
      <p className="text-gray-600 mb-4">
        Islamabad, Islamabad Capital Territory, Pakistan
      </p>
      <div className="w-full rounded-lg overflow-hidden border-gray-300">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3329.965553746924!2d73.04788221368194!3d33.68442074065656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df950467f845d3%3A0x9bc039e5ed6a30e0!2sIslamabad!5e0!3m2!1sen!2s!4v1688912345678!5m2!1sen!2s"
          width="100%"
          height="320"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Islamabad map"
        ></iframe>
      </div>
    </div>
  );
}
