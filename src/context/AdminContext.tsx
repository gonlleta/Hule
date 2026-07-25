import React, { createContext, useContext, useState, useEffect } from 'react';
import type { AdminUser, SiteContent, GalleryItem, ServiceItem, HeroTextContent } from '../types/admin';

const STORAGE_KEY_ADMIN = 'hule_admin_user';
const STORAGE_KEY_CONTENT = 'hule_site_content';

const defaultSiteContent: SiteContent = {
  hero: {
    topLabel: '— Dónde cada detalle importa',
    headlinePart1: 'Hacemos que tu',
    headlineHighlight: 'fiesta',
    headlinePart2: 'sea tan única como vos.',
    subtext: 'Globos, color y detalles para celebrar eso que no querés que pase desapercibido.',
  },
  gallery: [
    {
      id: '1',
      num: '01 / CELEBRACIONES & JUBILACIONES',
      title: 'Momentos únicos e inolvidables.',
      imgSrc: '/jubilacion_decor.jpg',
      bgColor: 'bg-[#FFFDF8]',
      textColor: 'text-[#4B2032]',
      tagColor: 'text-[#945B72]',
      heightClass: 'h-[450px] lg:h-[500px]',
    },
    {
      id: '2',
      num: '02 / CUMPLEAÑOS & ARCOS',
      title: 'Brillo, luces y ambientación especial.',
      imgSrc: '/cumple_azul_decor.jpg',
      bgColor: 'bg-[#945B72]',
      textColor: 'text-[#FFFDF8]',
      tagColor: 'text-[#F5F0B8]',
      heightClass: 'h-[450px] lg:h-[530px]',
      offsetClass: 'lg:translate-y-[-30px]',
      hoverClass: 'lg:hover:translate-y-[-34px]',
    },
    {
      id: '3',
      num: '03 / TEMÁTICAS TOY STORY',
      title: 'Personajes y diseños a medida.',
      imgSrc: '/toy_story_collage.png',
      bgColor: 'bg-[#F5F0B8]',
      textColor: 'text-[#4B2032]',
      tagColor: 'text-[#CB4178]',
      heightClass: 'h-[450px] lg:h-[470px]',
      offsetClass: 'lg:translate-y-8',
      hoverClass: 'lg:hover:translate-y-6',
    },
  ],
  services: [
    {
      id: '1',
      num: '01 / HULE',
      title: 'Cumples que hacen ¡wow!',
      desc: 'Arcos, guirnaldas y rincones para soplar las velitas con estilo.',
      iconName: 'Sparkles',
      bgColor: 'bg-[#DA90AE]',
      textColor: 'text-[#4B2032]',
    },
    {
      id: '2',
      num: '02 / HULE',
      title: 'Baby showers',
      desc: 'Bienvenida suave, dulce y muy especial.',
      iconName: 'Heart',
      bgColor: 'bg-[#F5F0B8]',
      textColor: 'text-[#4B2032]',
    },
    {
      id: '3',
      num: '03 / HULE',
      title: 'Momentos para brindar',
      desc: 'Aniversarios, recibidas y todo lo que merece un brindis.',
      iconName: 'Sparkles',
      bgColor: 'bg-[#E8A27F]',
      textColor: 'text-[#4B2032]',
    },
    {
      id: '4',
      num: '04 / HULE',
      title: 'Kits de cumpleaños',
      desc: 'Kits listos con todo lo necesario para celebrar y decorar vos en casa.',
      iconName: 'Gift',
      bgColor: 'bg-[#945B72]',
      textColor: 'text-[#FFFDF8]',
      hasDarkBg: true,
    },
    {
      id: '5',
      num: '05 / HULE',
      title: 'Candy bar',
      desc: 'La mesa más fotografiada de la fiesta: rica, ordenada y llena de color.',
      iconName: 'Palette',
      bgColor: 'bg-[#FFFDF8]',
      textColor: 'text-[#4B2032]',
      borderColor: 'border-[#4B2032]/10',
    },
  ],
};

interface AdminContextType {
  adminUser: AdminUser | null;
  isAdminLoggedIn: boolean;
  isAdminModalOpen: boolean;
  setIsAdminModalOpen: (open: boolean) => void;
  loginAdmin: (user: AdminUser) => void;
  registerAdmin: (name: string, username: string) => void;
  logoutAdmin: () => void;
  siteContent: SiteContent;
  updateHeroText: (hero: HeroTextContent) => void;
  updateGalleryItem: (id: string, updatedItem: Partial<GalleryItem>) => void;
  addGalleryItem: (item: Omit<GalleryItem, 'id'>) => void;
  deleteGalleryItem: (id: string) => void;
  updateServiceItem: (id: string, updatedItem: Partial<ServiceItem>) => void;
  resetSiteContent: () => void;
}

const AdminContext = createContext<AdminContextType | undefined>(undefined);

export const AdminProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [adminUser, setAdminUser] = useState<AdminUser | null>(() => {
    const saved = localStorage.getItem(STORAGE_KEY_ADMIN);
    return saved ? JSON.parse(saved) : null;
  });

  const [isAdminModalOpen, setIsAdminModalOpen] = useState(false);

  const [siteContent, setSiteContent] = useState<SiteContent>(() => {
    const saved = localStorage.getItem(STORAGE_KEY_CONTENT);
    return saved ? JSON.parse(saved) : defaultSiteContent;
  });

  useEffect(() => {
    if (adminUser) {
      localStorage.setItem(STORAGE_KEY_ADMIN, JSON.stringify(adminUser));
    } else {
      localStorage.removeItem(STORAGE_KEY_ADMIN);
    }
  }, [adminUser]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY_CONTENT, JSON.stringify(siteContent));
  }, [siteContent]);

  const loginAdmin = (user: AdminUser) => {
    setAdminUser(user);
  };

  const registerAdmin = (name: string, username: string) => {
    const newUser: AdminUser = { name, username };
    setAdminUser(newUser);
  };

  const logoutAdmin = () => {
    setAdminUser(null);
  };

  const updateHeroText = (hero: HeroTextContent) => {
    setSiteContent((prev) => ({ ...prev, hero }));
  };

  const updateGalleryItem = (id: string, updatedItem: Partial<GalleryItem>) => {
    setSiteContent((prev) => ({
      ...prev,
      gallery: prev.gallery.map((item) => (item.id === id ? { ...item, ...updatedItem } : item)),
    }));
  };

  const addGalleryItem = (item: Omit<GalleryItem, 'id'>) => {
    const newItem: GalleryItem = {
      ...item,
      id: Date.now().toString(),
    };
    setSiteContent((prev) => ({
      ...prev,
      gallery: [...prev.gallery, newItem],
    }));
  };

  const deleteGalleryItem = (id: string) => {
    setSiteContent((prev) => ({
      ...prev,
      gallery: prev.gallery.filter((item) => item.id !== id),
    }));
  };

  const updateServiceItem = (id: string, updatedItem: Partial<ServiceItem>) => {
    setSiteContent((prev) => ({
      ...prev,
      services: prev.services.map((item) => (item.id === id ? { ...item, ...updatedItem } : item)),
    }));
  };

  const resetSiteContent = () => {
    setSiteContent(defaultSiteContent);
    localStorage.removeItem(STORAGE_KEY_CONTENT);
  };

  return (
    <AdminContext.Provider
      value={{
        adminUser,
        isAdminLoggedIn: !!adminUser,
        isAdminModalOpen,
        setIsAdminModalOpen,
        loginAdmin,
        registerAdmin,
        logoutAdmin,
        siteContent,
        updateHeroText,
        updateGalleryItem,
        addGalleryItem,
        deleteGalleryItem,
        updateServiceItem,
        resetSiteContent,
      }}
    >
      {children}
    </AdminContext.Provider>
  );
};

export const useAdminContext = () => {
  const context = useContext(AdminContext);
  if (!context) {
    throw new Error('useAdminContext must be used within an AdminProvider');
  }
  return context;
};
