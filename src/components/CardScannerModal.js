import React, { useState, useEffect, useRef } from 'react';
import { ScanIcon, CloseIcon, CaptureIcon } from './icons';

const CardScannerModal = ({ isOpen, onClose, onScanComplete }) => {
  const videoRef = useRef(null);
  const [stream, setStream] = useState(null);
  const [scanData, setScanData] = useState({
    name: '',
    idNumber: '',
    gender: 'Masculino',
    career: ''
  });

  useEffect(() => {
    if (isOpen) {
      startCamera();
    } else {
      stopCamera();
    }
  }, [isOpen]);

  const startCamera = async () => {
    try {
      const mediaStream = await navigator.mediaDevices.getUserMedia({ 
        video: { 
          facingMode: 'environment',
          width: { ideal: 1280 },
          height: { ideal: 720 }
        }
      });
      if (videoRef.current) {
        videoRef.current.srcObject = mediaStream;
      }
      setStream(mediaStream);
    } catch (err) {
      console.error('Error al acceder a la cámara:', err);
      alert('No se pudo acceder a la cámara');
    }
  };

  const stopCamera = () => {
    if (stream) {
      stream.getTracks().forEach(track => track.stop());
      setStream(null);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setScanData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    onScanComplete(scanData);
    onClose();
  };

  const simulateScan = () => {
    setScanData({
      name: 'Juan Pérez',
      idNumber: '001-11223344-5',
      gender: 'Masculino',
      career: 'Ingeniería'
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-xl max-w-2xl w-full overflow-hidden">
        <div className="flex justify-between items-center p-4 border-b">
          <h3 className="text-xl font-bold flex items-center">
            <ScanIcon className="mr-2" />
            Escaneo de Carnet Universitario
          </h3>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <CloseIcon />
          </button>
        </div>
        
        <div className="p-4">
          <div className="relative bg-gray-900 rounded-lg overflow-hidden h-64 mb-4">
            <video 
              ref={videoRef} 
              autoPlay 
              playsInline
              muted
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 border-4 border-blue-400 rounded-lg pointer-events-none"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Nombre</label>
              <input
                type="text"
                name="name"
                value={scanData.name}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Cédula</label>
              <input
                type="text"
                name="idNumber"
                value={scanData.idNumber}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Carrera</label>
              <input
                type="text"
                name="career"
                value={scanData.career}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Género</label>
              <select
                name="gender"
                value={scanData.gender}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="Masculino">Masculino</option>
                <option value="Femenino">Femenino</option>
                <option value="Otro">Otro</option>
              </select>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 px-4 py-3 flex justify-between border-t">
          <button
            onClick={simulateScan}
            className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 flex items-center"
          >
            <CaptureIcon className="mr-2" />
            Simular Escaneo
          </button>
          <button
            onClick={handleSubmit}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 flex items-center"
            disabled={!scanData.name || !scanData.idNumber}
          >
            Usar Datos
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardScannerModal;