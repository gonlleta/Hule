import React, { useState } from 'react';
import { useAdminContext } from '../context/AdminContext';
import { X, User, Image, Layout, Settings, Upload, Plus, Trash2, LogOut, Check, RefreshCw } from 'lucide-react';

export const AdminModal: React.FC = () => {
  const {
    adminUser,
    isAdminLoggedIn,
    isAdminModalOpen,
    setIsAdminModalOpen,
    authenticateAdmin,
    logoutAdmin,
    siteContent,
    updateHeroText,
    updateGalleryItem,
    addGalleryItem,
    deleteGalleryItem,
    updateServiceItem,
    resetSiteContent,
  } = useAdminContext();

  const [activeTab, setActiveTab] = useState<'account' | 'gallery' | 'services' | 'hero'>('account');
  const [loginUser, setLoginUser] = useState('GIULIAHILT');
  const [loginPass, setLoginPass] = useState('GIULIA2017');
  const [authError, setAuthError] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  // New gallery item local state
  const [newTitle, setNewTitle] = useState('');
  const [newNum, setNewNum] = useState('');
  const [newImgSrc, setNewImgSrc] = useState('');

  if (!isAdminModalOpen) return null;

  const showNotification = (msg: string) => {
    setSuccessMsg(msg);
    setTimeout(() => setSuccessMsg(''), 3000);
  };

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setAuthError('');
    const success = authenticateAdmin(loginUser, loginPass);
    if (success) {
      showNotification('¡Sesión iniciada correctamente como Giulia Hilt!');
      setActiveTab('gallery');
    } else {
      setAuthError('Usuario o contraseña incorrectos');
    }
  };

  const handleImageUpload = (id: string, file: File) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      if (typeof reader.result === 'string') {
        updateGalleryItem(id, { imgSrc: reader.result });
        showNotification('Foto actualizada con éxito');
      }
    };
    reader.readAsDataURL(file);
  };

  const handleNewImageUpload = (file: File) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      if (typeof reader.result === 'string') {
        setNewImgSrc(reader.result);
      }
    };
    reader.readAsDataURL(file);
  };

  const handleAddGalleryCard = (e: React.FormEvent) => {
    e.preventDefault();
    if (newTitle.trim() && newImgSrc) {
      addGalleryItem({
        num: newNum.trim() || '04 / EVENTOS ESPECIALES',
        title: newTitle.trim(),
        imgSrc: newImgSrc,
        bgColor: 'bg-[#FFFDF8]',
        textColor: 'text-[#4B2032]',
        tagColor: 'text-[#945B72]',
        heightClass: 'h-[450px] lg:h-[500px]',
      });
      setNewTitle('');
      setNewNum('');
      setNewImgSrc('');
      showNotification('Nueva foto agregada a la galería');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#4B2032]/60 backdrop-blur-md animate-fadeIn">
      <div className="bg-[#F8F2E8] border border-[#4B2032]/20 rounded-3xl w-full max-w-4xl max-h-[90vh] flex flex-col shadow-2xl overflow-hidden">
        
        {/* Header of Modal */}
        <div className="bg-[#4B2032] text-[#FFFDF8] px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#CB4178] flex items-center justify-center">
              <User className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="font-serif text-xl font-semibold leading-tight">Panel de Administrador</h3>
              <p className="font-mono text-xs text-[#DA90AE]">
                {isAdminLoggedIn ? `Sesión activa: ${adminUser?.name} (@${adminUser?.username})` : 'Modo Visitante / Sin registrar'}
              </p>
            </div>
          </div>
          
          <button
            onClick={() => setIsAdminModalOpen(false)}
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Success Alert Toast */}
        {successMsg && (
          <div className="bg-[#CB4178] text-white px-6 py-2.5 text-sm font-semibold flex items-center gap-2 animate-fadeIn">
            <Check className="w-4 h-4" />
            <span>{successMsg}</span>
          </div>
        )}

        {/* Navigation Tabs */}
        <div className="flex border-b border-[#4B2032]/10 bg-[#FFFDF8] px-6 pt-3 gap-2 overflow-x-auto">
          <button
            onClick={() => setActiveTab('gallery')}
            className={`px-4 py-3 text-xs font-mono font-bold tracking-wider uppercase rounded-t-xl transition-colors flex items-center gap-2 ${
              activeTab === 'gallery'
                ? 'bg-[#F8F2E8] text-[#CB4178] border-t-2 border-[#CB4178]'
                : 'text-[#945B72] hover:text-[#4B2032]'
            }`}
          >
            <Image className="w-4 h-4" />
            <span>Fotos & Galería</span>
          </button>

          <button
            onClick={() => setActiveTab('hero')}
            className={`px-4 py-3 text-xs font-mono font-bold tracking-wider uppercase rounded-t-xl transition-colors flex items-center gap-2 ${
              activeTab === 'hero'
                ? 'bg-[#F8F2E8] text-[#CB4178] border-t-2 border-[#CB4178]'
                : 'text-[#945B72] hover:text-[#4B2032]'
            }`}
          >
            <Layout className="w-4 h-4" />
            <span>Textos Principales</span>
          </button>

          <button
            onClick={() => setActiveTab('services')}
            className={`px-4 py-3 text-xs font-mono font-bold tracking-wider uppercase rounded-t-xl transition-colors flex items-center gap-2 ${
              activeTab === 'services'
                ? 'bg-[#F8F2E8] text-[#CB4178] border-t-2 border-[#CB4178]'
                : 'text-[#945B72] hover:text-[#4B2032]'
            }`}
          >
            <Settings className="w-4 h-4" />
            <span>Servicios</span>
          </button>

          <button
            onClick={() => setActiveTab('account')}
            className={`px-4 py-3 text-xs font-mono font-bold tracking-wider uppercase rounded-t-xl transition-colors flex items-center gap-2 ml-auto ${
              activeTab === 'account'
                ? 'bg-[#F8F2E8] text-[#CB4178] border-t-2 border-[#CB4178]'
                : 'text-[#945B72] hover:text-[#4B2032]'
            }`}
          >
            <User className="w-4 h-4" />
            <span>Cuenta Admin</span>
          </button>
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          
          {/* TAB: GALLERY & PHOTOS */}
          {activeTab === 'gallery' && (
            <div className="space-y-8">
              <div>
                <h4 className="font-serif text-2xl text-[#4B2032] font-semibold mb-1">Fotos de Inspiración</h4>
                <p className="text-sm text-[#945B72]">Cambia las imágenes existentes, edita sus títulos o agrega nuevas tarjetas a la galería.</p>
              </div>

              {/* Current Gallery Grid Editor */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {siteContent.gallery.map((item) => (
                  <div key={item.id} className="bg-white border border-[#4B2032]/10 rounded-2xl p-4 space-y-4 shadow-sm">
                    <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-gray-100 border">
                      <img src={item.imgSrc} alt={item.title} className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                        <label className="px-3 py-2 bg-[#CB4178] hover:bg-[#4B2032] text-white rounded-lg text-xs font-semibold font-mono cursor-pointer flex items-center gap-1.5 shadow">
                          <Upload className="w-3.5 h-3.5" />
                          <span>Cambiar Foto</span>
                          <input
                            type="file"
                            accept="image/*"
                            className="hidden"
                            onChange={(e) => {
                              if (e.target.files?.[0]) handleImageUpload(item.id, e.target.files[0]);
                            }}
                          />
                        </label>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div>
                        <label className="block text-xs font-mono uppercase text-[#945B72] font-bold mb-1">Etiqueta / Categoría</label>
                        <input
                          type="text"
                          value={item.num}
                          onChange={(e) => updateGalleryItem(item.id, { num: e.target.value })}
                          className="w-full px-3 py-2 bg-[#F8F2E8] border border-[#4B2032]/15 rounded-lg text-sm font-mono text-[#4B2032]"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-mono uppercase text-[#945B72] font-bold mb-1">Título de Foto</label>
                        <input
                          type="text"
                          value={item.title}
                          onChange={(e) => updateGalleryItem(item.id, { title: e.target.value })}
                          className="w-full px-3 py-2 bg-[#F8F2E8] border border-[#4B2032]/15 rounded-lg text-sm text-[#4B2032] font-medium"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-mono uppercase text-[#945B72] font-bold mb-1">O usar URL de Imagen</label>
                        <input
                          type="text"
                          value={item.imgSrc.startsWith('data:') ? '(Imagen subida desde archivo)' : item.imgSrc}
                          onChange={(e) => updateGalleryItem(item.id, { imgSrc: e.target.value })}
                          className="w-full px-3 py-1.5 bg-[#F8F2E8] border border-[#4B2032]/15 rounded-lg text-xs font-mono text-[#4B2032]"
                          placeholder="https://..."
                        />
                      </div>

                      {siteContent.gallery.length > 1 && (
                        <button
                          onClick={() => {
                            deleteGalleryItem(item.id);
                            showNotification('Foto eliminada');
                          }}
                          className="px-3 py-1.5 text-xs text-red-600 hover:text-red-800 font-mono flex items-center gap-1 mt-2"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                          <span>Eliminar esta foto</span>
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Add New Photo Card Form */}
              <div className="bg-[#FFFDF8] border-2 border-dashed border-[#CB4178]/40 rounded-2xl p-6 space-y-4">
                <h5 className="font-serif text-lg text-[#4B2032] font-semibold flex items-center gap-2">
                  <Plus className="w-5 h-5 text-[#CB4178]" />
                  <span>Agregar Nueva Foto a la Galería</span>
                </h5>

                <form onSubmit={handleAddGalleryCard} className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
                  <div>
                    <label className="block text-xs font-mono uppercase text-[#945B72] font-bold mb-1">Etiqueta / Nº</label>
                    <input
                      type="text"
                      placeholder="04 / EVENTO ESPECIAL"
                      value={newNum}
                      onChange={(e) => setNewNum(e.target.value)}
                      className="w-full px-3 py-2 bg-white border border-[#4B2032]/15 rounded-lg text-sm text-[#4B2032]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-[#945B72] font-bold mb-1">Título de Foto</label>
                    <input
                      type="text"
                      placeholder="Descripción de la foto..."
                      value={newTitle}
                      onChange={(e) => setNewTitle(e.target.value)}
                      className="w-full px-3 py-2 bg-white border border-[#4B2032]/15 rounded-lg text-sm text-[#4B2032]"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-[#945B72] font-bold mb-1">Seleccionar Imagen</label>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => {
                        if (e.target.files?.[0]) handleNewImageUpload(e.target.files[0]);
                      }}
                      className="w-full text-xs font-mono text-[#4B2032]"
                    />
                  </div>

                  <div className="md:col-span-3 flex justify-end">
                    <button
                      type="submit"
                      disabled={!newTitle || !newImgSrc}
                      className="px-5 py-2.5 bg-[#CB4178] hover:bg-[#4B2032] disabled:opacity-50 text-white rounded-xl text-xs font-mono font-bold uppercase tracking-wider shadow transition-colors"
                    >
                      + Guardar Foto Nueva
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}

          {/* TAB: HERO TEXTS */}
          {activeTab === 'hero' && (
            <div className="space-y-6">
              <div>
                <h4 className="font-serif text-2xl text-[#4B2032] font-semibold mb-1">Textos de Portada (Hero)</h4>
                <p className="text-sm text-[#945B72]">Modifica los textos principales que ven los visitantes al entrar.</p>
              </div>

              <div className="bg-white border border-[#4B2032]/10 rounded-2xl p-6 space-y-4 shadow-sm">
                <div>
                  <label className="block text-xs font-mono uppercase text-[#945B72] font-bold mb-1">Etiqueta Superior</label>
                  <input
                    type="text"
                    value={siteContent.hero.topLabel}
                    onChange={(e) => {
                      updateHeroText({ ...siteContent.hero, topLabel: e.target.value });
                      showNotification('Texto guardado');
                    }}
                    className="w-full px-4 py-2.5 bg-[#F8F2E8] border border-[#4B2032]/15 rounded-xl text-sm font-mono text-[#4B2032]"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase text-[#945B72] font-bold mb-1">Título (Parte 1)</label>
                    <input
                      type="text"
                      value={siteContent.hero.headlinePart1}
                      onChange={(e) => {
                        updateHeroText({ ...siteContent.hero, headlinePart1: e.target.value });
                        showNotification('Texto guardado');
                      }}
                      className="w-full px-4 py-2.5 bg-[#F8F2E8] border border-[#4B2032]/15 rounded-xl text-sm font-serif text-[#4B2032]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-[#CB4178] font-bold mb-1">Palabra Resaltada</label>
                    <input
                      type="text"
                      value={siteContent.hero.headlineHighlight}
                      onChange={(e) => {
                        updateHeroText({ ...siteContent.hero, headlineHighlight: e.target.value });
                        showNotification('Texto guardado');
                      }}
                      className="w-full px-4 py-2.5 bg-[#F8F2E8] border border-[#CB4178]/30 rounded-xl text-sm font-serif text-[#CB4178] font-bold"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-[#945B72] font-bold mb-1">Título (Parte 2)</label>
                    <input
                      type="text"
                      value={siteContent.hero.headlinePart2}
                      onChange={(e) => {
                        updateHeroText({ ...siteContent.hero, headlinePart2: e.target.value });
                        showNotification('Texto guardado');
                      }}
                      className="w-full px-4 py-2.5 bg-[#F8F2E8] border border-[#4B2032]/15 rounded-xl text-sm font-serif text-[#4B2032]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-[#945B72] font-bold mb-1">Subtexto Descriptivo</label>
                  <textarea
                    rows={3}
                    value={siteContent.hero.subtext}
                    onChange={(e) => {
                      updateHeroText({ ...siteContent.hero, subtext: e.target.value });
                      showNotification('Texto guardado');
                    }}
                    className="w-full px-4 py-2.5 bg-[#F8F2E8] border border-[#4B2032]/15 rounded-xl text-sm text-[#4B2032]"
                  />
                </div>
              </div>
            </div>
          )}

          {/* TAB: SERVICES */}
          {activeTab === 'services' && (
            <div className="space-y-6">
              <div>
                <h4 className="font-serif text-2xl text-[#4B2032] font-semibold mb-1">Servicios (Lo Que Hacemos)</h4>
                <p className="text-sm text-[#945B72]">Edita los títulos y descripciones de las tarjetas de servicio.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {siteContent.services.map((service) => (
                  <div key={service.id} className="bg-white border border-[#4B2032]/10 rounded-2xl p-4 space-y-3 shadow-sm">
                    <span className="font-mono text-xs text-[#945B72] font-bold uppercase">{service.num}</span>
                    <div>
                      <label className="block text-xs font-mono uppercase text-[#945B72] font-bold mb-1">Título de Servicio</label>
                      <input
                        type="text"
                        value={service.title}
                        onChange={(e) => {
                          updateServiceItem(service.id, { title: e.target.value });
                          showNotification('Servicio actualizado');
                        }}
                        className="w-full px-3 py-2 bg-[#F8F2E8] border border-[#4B2032]/15 rounded-lg text-sm font-serif text-[#4B2032]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono uppercase text-[#945B72] font-bold mb-1">Descripción</label>
                      <textarea
                        rows={2}
                        value={service.desc}
                        onChange={(e) => {
                          updateServiceItem(service.id, { desc: e.target.value });
                          showNotification('Servicio actualizado');
                        }}
                        className="w-full px-3 py-2 bg-[#F8F2E8] border border-[#4B2032]/15 rounded-lg text-xs text-[#4B2032]"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB: ACCOUNT MANAGEMENT */}
          {activeTab === 'account' && (
            <div className="space-y-6">
              <div>
                <h4 className="font-serif text-2xl text-[#4B2032] font-semibold mb-1">Acceso de Administrador</h4>
                <p className="text-sm text-[#945B72]">Ingresa con tus credenciales de administrador para gestionar el sitio.</p>
              </div>

              {isAdminLoggedIn ? (
                <div className="bg-white border border-[#4B2032]/10 rounded-2xl p-6 space-y-4 shadow-sm">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-[#CB4178] text-white flex items-center justify-center text-xl font-bold font-serif shadow">
                      {adminUser?.name.charAt(0).toUpperCase()}
                    </div>
                    <div>
                      <h5 className="font-serif text-xl font-bold text-[#4B2032]">{adminUser?.name}</h5>
                      <p className="font-mono text-sm text-[#945B72]">Usuario Administrador: @{adminUser?.username}</p>
                    </div>
                  </div>

                  <div className="border-t pt-4 flex flex-wrap gap-4 justify-between items-center">
                    <button
                      onClick={logoutAdmin}
                      className="px-4 py-2.5 bg-red-600 hover:bg-red-700 text-white rounded-xl text-xs font-mono font-bold uppercase tracking-wider flex items-center gap-2 shadow"
                    >
                      <LogOut className="w-4 h-4" />
                      <span>Cerrar Sesión</span>
                    </button>

                    <button
                      onClick={() => {
                        resetSiteContent();
                        showNotification('Contenido restablecido a valores por defecto');
                      }}
                      className="px-4 py-2.5 bg-[#4B2032]/10 hover:bg-[#4B2032]/20 text-[#4B2032] rounded-xl text-xs font-mono font-bold uppercase tracking-wider flex items-center gap-2"
                    >
                      <RefreshCw className="w-4 h-4" />
                      <span>Restablecer Contenidos de Fábrica</span>
                    </button>
                  </div>
                </div>
              ) : (
                <div className="bg-white border border-[#4B2032]/10 rounded-2xl p-6 space-y-4 shadow-sm max-w-md mx-auto">
                  <h5 className="font-serif text-xl font-semibold text-[#4B2032] text-center">Iniciar Sesión como Admin</h5>
                  
                  {authError && (
                    <div className="bg-red-100 border border-red-200 text-red-700 px-4 py-2 rounded-xl text-xs font-mono font-semibold">
                      {authError}
                    </div>
                  )}

                  <form onSubmit={handleLoginSubmit} className="space-y-4">
                    <div>
                      <label className="block text-xs font-mono uppercase text-[#945B72] font-bold mb-1">Usuario</label>
                      <input
                        type="text"
                        placeholder="GIULIAHILT"
                        value={loginUser}
                        onChange={(e) => setLoginUser(e.target.value)}
                        className="w-full px-4 py-2.5 bg-[#F8F2E8] border border-[#4B2032]/15 rounded-xl text-sm font-mono text-[#4B2032]"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase text-[#945B72] font-bold mb-1">Contraseña</label>
                      <input
                        type="password"
                        placeholder="GIULIA2017"
                        value={loginPass}
                        onChange={(e) => setLoginPass(e.target.value)}
                        className="w-full px-4 py-2.5 bg-[#F8F2E8] border border-[#4B2032]/15 rounded-xl text-sm font-mono text-[#4B2032]"
                        required
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3 bg-[#CB4178] hover:bg-[#4B2032] text-white rounded-xl text-xs font-mono font-bold uppercase tracking-wider shadow transition-colors"
                    >
                      Ingresar al Panel
                    </button>
                  </form>
                </div>
              )}
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="bg-[#FFFDF8] border-t border-[#4B2032]/10 px-6 py-4 flex justify-between items-center">
          <button
            onClick={resetSiteContent}
            className="text-xs font-mono text-[#945B72] hover:text-[#4B2032] underline flex items-center gap-1"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Restablecer todo</span>
          </button>

          <button
            onClick={() => setIsAdminModalOpen(false)}
            className="px-6 py-2.5 bg-[#4B2032] hover:bg-[#CB4178] text-white rounded-full text-xs font-mono font-bold uppercase tracking-wider transition-colors shadow"
          >
            Cerrar Panel
          </button>
        </div>

      </div>
    </div>
  );
};

export default AdminModal;
