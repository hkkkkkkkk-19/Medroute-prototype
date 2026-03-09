
import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../LanguageContext.tsx';
import { backendService } from '../services/backendService.ts';
import { Shield, CheckCircle, Clock, Truck, FileText, UserCheck, AlertCircle, Upload, ArrowRight, X, Package } from 'lucide-react';

const ReceiverDashboard: React.FC = () => {
  const { t } = useLanguage();
  const [step, setStep] = useState<'IDLE' | 'VALIDATE_AYUSHMAN' | 'UPLOAD_PRESCRIPTION' | 'VERIFYING_PRESCRIPTION' | 'PRESCRIPTION_VERIFIED' | 'SCHEDULE_DELIVERY' | 'SCHEDULING' | 'DELIVERY_SCHEDULED'>('IDLE');
  const [ayushmanId, setAyushmanId] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [prescription, setPrescription] = useState<File | null>(null);
  const [requests, setRequests] = useState<any[]>([]);
  const [currentRequest, setCurrentRequest] = useState<any>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setRequests(backendService.getRequests());
  }, []);

  const handleValidateAyushman = () => {
    if (ayushmanId === 'ABC') {
      setError(null);
      setStep('UPLOAD_PRESCRIPTION');
    } else {
      setError(t('receiver.invalidId'));
    }
  };

  const handlePrescriptionUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setPrescription(file);
      setStep('VERIFYING_PRESCRIPTION');
      
      // Simulate verification
      setTimeout(() => {
        const newReq = backendService.addRequest({
          ayushmanId,
          prescriptionName: file.name,
          status: 'Prescription Uploaded'
        });
        setCurrentRequest(newReq);
        setRequests(backendService.getRequests());
        
        setTimeout(() => {
          backendService.updateRequestStatus(newReq.id, 'Verified Prescription');
          setRequests(backendService.getRequests());
          setStep('PRESCRIPTION_VERIFIED');
        }, 2000);
      }, 1500);
    }
  };

  const handleScheduleDelivery = () => {
    setStep('SCHEDULING');
    setTimeout(() => {
      if (currentRequest) {
        const updated = backendService.updateRequestStatus(currentRequest.id, 'Delivery Scheduled', {
          estimatedArrival: '12:45 PM',
          deliveryDate: 'Today'
        });
        setCurrentRequest(updated);
        setRequests(backendService.getRequests());
        setStep('DELIVERY_SCHEDULED');
      }
    }, 2000);
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 animate-in fade-in duration-500 font-sans">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-16">
        <div>
          <h2 className="text-5xl font-black text-slate-900 mb-2 tracking-tighter uppercase">{t('receiver.title')}</h2>
          <p className="text-slate-500 text-lg font-medium">{t('receiver.subtitle')}</p>
        </div>
        {step === 'IDLE' && (
          <button 
            onClick={() => setStep('VALIDATE_AYUSHMAN')}
            className="px-10 py-5 bg-indigo-600 text-white rounded-[1.5rem] font-black hover:bg-indigo-700 transition shadow-2xl shadow-indigo-100 flex items-center gap-4 group uppercase tracking-widest text-xs"
          >
            <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition">
              <FileText className="w-5 h-5" />
            </div>
            {t('receiver.newRequest')}
          </button>
        )}
      </div>

      <div className="grid lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 space-y-8">
          <div className="bg-white p-10 rounded-[3rem] shadow-xl border border-slate-100 relative overflow-hidden min-h-[500px] flex flex-col">
            <div className="flex items-center justify-between mb-10">
                <h3 className="text-2xl font-black text-slate-900 tracking-tighter">{t('receiver.log')}</h3>
                <span className="text-[10px] font-black text-indigo-600 bg-indigo-50 px-4 py-1.5 rounded-full uppercase tracking-widest border border-indigo-100">Live Network Sync</span>
            </div>
            
            <div className="flex-grow flex flex-col justify-center">
              {error && (
                <div className="mb-6 p-4 bg-red-50 text-red-600 rounded-2xl text-sm font-bold border border-red-100 flex items-center gap-3 animate-bounce">
                  <AlertCircle className="w-5 h-5 shrink-0" />
                  {error}
                </div>
              )}

              {step === 'VALIDATE_AYUSHMAN' && (
                <div className="max-w-md mx-auto w-full animate-in zoom-in duration-300">
                  <div className="text-center mb-8">
                    <div className="w-20 h-20 bg-indigo-100 text-indigo-600 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                      <UserCheck className="w-10 h-10" />
                    </div>
                    <h4 className="text-2xl font-black text-slate-900 uppercase tracking-tighter">{t('receiver.ayushman')}</h4>
                  </div>
                  <div className="space-y-4">
                    <input 
                      type="text" 
                      value={ayushmanId}
                      onChange={(e) => setAyushmanId(e.target.value)}
                      placeholder={t('receiver.ayushmanPlaceholder')}
                      className="w-full p-6 bg-slate-50 border-2 border-slate-100 rounded-2xl font-bold text-lg outline-none focus:border-indigo-600 transition-all text-center"
                    />
                    <button 
                      onClick={handleValidateAyushman}
                      className="w-full py-6 bg-indigo-600 text-white rounded-2xl font-black shadow-xl hover:bg-indigo-700 transition-all uppercase tracking-widest text-sm"
                    >
                      {t('receiver.validate')}
                    </button>
                    <button 
                      onClick={() => setStep('IDLE')}
                      className="w-full py-4 text-slate-400 font-bold text-xs hover:text-slate-600 transition-colors"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              )}

              {step === 'UPLOAD_PRESCRIPTION' && (
                <div className="text-center animate-in fade-in duration-300">
                  <div className="w-24 h-24 bg-emerald-100 text-emerald-600 rounded-[2rem] flex items-center justify-center mx-auto mb-8 shadow-xl">
                    <Upload className="w-12 h-12" />
                  </div>
                  <h4 className="text-3xl font-black text-slate-900 uppercase tracking-tighter mb-4">{t('receiver.uploadPrescription')}</h4>
                  <p className="text-slate-500 font-bold text-sm mb-10 max-w-xs mx-auto">{t('receiver.prescriptionDesc')}</p>
                  
                  <input 
                    type="file" 
                    ref={fileInputRef} 
                    onChange={handlePrescriptionUpload} 
                    className="hidden" 
                    accept="image/*,.pdf" 
                  />
                  <button 
                    onClick={() => fileInputRef.current?.click()}
                    className="px-12 py-6 bg-emerald-600 text-white rounded-[2rem] font-black shadow-2xl hover:bg-emerald-700 transition-all uppercase tracking-widest text-sm flex items-center gap-3 mx-auto"
                  >
                    <Upload className="w-5 h-5" />
                    Select File
                  </button>
                </div>
              )}

              {step === 'VERIFYING_PRESCRIPTION' && (
                <div className="text-center py-10 animate-in fade-in duration-300">
                  <div className="relative w-24 h-24 mx-auto mb-10">
                    <div className="absolute inset-0 border-8 border-indigo-50 rounded-full"></div>
                    <div className="absolute inset-0 border-8 border-indigo-600 border-t-transparent rounded-full animate-spin"></div>
                  </div>
                  <h4 className="text-3xl font-black text-slate-900 uppercase tracking-tighter">{t('receiver.verifying')}</h4>
                  <p className="text-slate-500 font-bold text-sm mt-4">Consulting Clinical Audit Engine</p>
                </div>
              )}

              {step === 'PRESCRIPTION_VERIFIED' && (
                <div className="text-center py-10 animate-in zoom-in duration-500">
                  <div className="w-24 h-24 bg-emerald-500 text-white rounded-[2rem] flex items-center justify-center mx-auto mb-8 shadow-3xl shadow-emerald-100">
                    <CheckCircle className="w-12 h-12" />
                  </div>
                  <h4 className="text-4xl font-black text-slate-900 uppercase tracking-tighter mb-4">{t('receiver.verified')}</h4>
                  <p className="text-slate-500 font-bold text-sm mb-10 max-w-sm mx-auto">{t('receiver.verifiedDesc')}</p>
                  
                  <button 
                    onClick={handleScheduleDelivery}
                    className="px-12 py-6 bg-indigo-600 text-white rounded-[2rem] font-black shadow-2xl hover:bg-indigo-700 transition-all uppercase tracking-widest text-sm flex items-center gap-3 mx-auto"
                  >
                    <Truck className="w-6 h-6" />
                    {t('receiver.schedule')}
                  </button>
                </div>
              )}

              {step === 'SCHEDULING' && (
                <div className="text-center py-10 animate-in fade-in duration-300">
                  <div className="w-32 h-32 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-8 relative">
                    <Truck className="w-16 h-16 text-indigo-600 animate-bounce" />
                    <div className="absolute inset-0 border-4 border-indigo-200 border-t-indigo-600 rounded-full animate-spin"></div>
                  </div>
                  <h4 className="text-3xl font-black text-slate-900 uppercase tracking-tighter">{t('receiver.scheduling')}</h4>
                </div>
              )}

              {step === 'DELIVERY_SCHEDULED' && currentRequest && (
                <div className="text-center py-10 animate-in zoom-in duration-500">
                  <div className="w-24 h-24 bg-indigo-600 text-white rounded-[2rem] flex items-center justify-center mx-auto mb-8 shadow-3xl shadow-indigo-100">
                    <Truck className="w-12 h-12" />
                  </div>
                  <h4 className="text-4xl font-black text-slate-900 uppercase tracking-tighter mb-2">{t('receiver.scheduled')}</h4>
                  <p className="text-slate-500 font-bold text-sm mb-8">{t('receiver.arrival')}: <span className="text-indigo-600">{currentRequest.estimatedArrival}</span></p>
                  
                  <div className="bg-indigo-50 p-8 rounded-[2.5rem] border border-indigo-100 inline-block mb-10">
                    <p className="text-[10px] font-black text-indigo-400 uppercase tracking-widest mb-3">{t('receiver.otp')}</p>
                    <div className="text-6xl font-black text-indigo-600 tracking-widest">{currentRequest.otp}</div>
                    <p className="text-[10px] font-bold text-indigo-500 mt-4 max-w-[200px] mx-auto leading-relaxed">{t('receiver.otpDesc')}</p>
                  </div>
                  
                  <div className="flex flex-col gap-4">
                    <button 
                      onClick={() => setStep('IDLE')}
                      className="px-10 py-5 bg-slate-900 text-white rounded-2xl font-black hover:bg-black transition shadow-xl uppercase tracking-widest text-xs mx-auto"
                    >
                      Back to Dashboard
                    </button>
                  </div>
                </div>
              )}

              {step === 'IDLE' && (
                <div className="space-y-6">
                  {requests.length > 0 ? (
                    requests.map((req, i) => (
                      <div key={i} className="p-8 bg-slate-50/50 rounded-3xl border border-slate-100 flex flex-col md:flex-row md:items-center justify-between gap-6 transition hover:bg-white hover:shadow-lg duration-300">
                        <div className="flex gap-6 items-center">
                          <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-indigo-600 shadow-sm border border-slate-50">
                            <Package className="w-8 h-8" />
                          </div>
                          <div>
                            <h4 className="text-xl font-black text-slate-900 uppercase tracking-tight">{req.prescriptionName || 'Medicine Request'}</h4>
                            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-1">ID: {req.id} • {new Date(req.timestamp).toLocaleDateString()}</p>
                          </div>
                        </div>
                        <div className="flex flex-col items-end gap-2">
                          <span className={`px-5 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest ${
                            req.status === 'Completed' ? 'bg-emerald-100 text-emerald-700' :
                            req.status === 'Delivery Scheduled' ? 'bg-indigo-100 text-indigo-700' :
                            'bg-amber-100 text-amber-700'
                          }`}>
                            {req.status}
                          </span>
                          {req.status === 'Delivery Scheduled' && (
                            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Arrival: {req.estimatedArrival}</p>
                          )}
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="p-16 text-center bg-indigo-50/30 border-3 border-dashed border-indigo-100 rounded-[3rem]">
                      <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center text-indigo-600 mx-auto mb-8 shadow-xl">
                        <FileText className="w-10 h-10" />
                      </div>
                      <h4 className="text-2xl font-black text-slate-900 mb-3 uppercase tracking-tighter">No Active Requests</h4>
                      <p className="text-slate-500 text-sm max-w-sm mx-auto font-medium leading-relaxed">Your medicine requests and history will appear here once you start a new request.</p>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="space-y-10">
          <div className="bg-gradient-to-br from-indigo-600 to-indigo-800 p-10 rounded-[3rem] text-white shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
            <h3 className="text-2xl font-black mb-6 tracking-tight uppercase">Network Logistics</h3>
            <p className="text-indigo-100 font-medium mb-10 leading-relaxed">The MedRoute system ensures clinical verification of every batch before it reaches you.</p>
            <div className="p-4 bg-white/10 rounded-2xl border border-white/20">
                <div className="text-[10px] uppercase font-black tracking-widest text-indigo-200 mb-2">System Status</div>
                <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                    <span className="font-bold text-xs">Operational</span>
                </div>
            </div>
          </div>
          
          <div className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-sm">
            <h4 className="font-black text-slate-900 mb-8 uppercase tracking-widest text-xs flex items-center gap-2">
              <Shield className="w-4 h-4 text-emerald-500" />
              Safety Assurance
            </h4>
            <div className="space-y-6">
                {[
                  { title: "AI Verification", desc: "Scanned via MedRoute Lens for authenticity." },
                  { title: "Physical Check", desc: "Inspected by licensed pharmacists at hubs." },
                  { title: "Secure Logistics", desc: "Distributed via climate-controlled network." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                      <div className="w-10 h-10 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center shrink-0">
                        <CheckCircle className="w-5 h-5" />
                      </div>
                      <div>
                          <p className="text-slate-900 font-black text-sm uppercase tracking-tight">{item.title}</p>
                          <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mt-1">{item.desc}</p>
                      </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReceiverDashboard;
