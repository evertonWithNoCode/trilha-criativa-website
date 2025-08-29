import { PersonalInfoForm } from "@/components/accountComponents/PersonalInfoForm";
import { ProfileHeader } from "@/components/accountComponents/ProfileHeader";
import { TabNavigation } from "@/components/accountComponents/TabNavigation";
import { AppSidebar } from "@/components/AppSideBar";
import HelpButton from "@/components/HelpButton";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useAuth } from '@/contexts/AuthContext';

export function AccountPage() {
  return (
    <main className="w-[100%] min-h-screen bg-[#FEF2CC]">
     <AppSidebar />
      <div className="w-[100%] h-[405px] absolute bg-[#FFFCF2] rounded-[20px]  max-md:w-[calc(100%_-_32px)] max-md:h-[300px] max-md:left-4 max-md:top-5 max-sm:w-[calc(100%_-_16px)] max-sm:h-[250px] max-sm:left-2 max-sm:top-2.5 overflow-x-hidden " />
      <div className="w-[100%] h-[300px] absolute bg-[#FEF2CC] rounded-[0_0_20px_20px]  top-72 max-md:w-[calc(100%_-_32px)] max-md:h-auto max-md:min-h-[600px] max-md:left-4 max-md:top-[200px] max-sm:w-[calc(100%_-_16px)] max-sm:left-2 max-sm:top-[150px] overflow-x-hidden" />
      
      {/* Page header */}
      <header>
        <h1 className="w-[600px] text-[#2C2623] text-5xl font-extrabold leading-[56px] tracking-[-0.48px] absolute h-14 left-[252px] top-[58px] max-md:text-4xl max-md:leading-[44px] max-md:w-[calc(100%_-_64px)] max-md:left-8 max-md:top-[60px] max-sm:text-[28px] max-sm:leading-9 max-sm:w-[calc(100%_-_48px)] max-sm:left-6 max-sm:top-10">
          Conta
        </h1>
        <p className="w-[688px] text-[#2C2623] text-lg font-normal leading-6 tracking-[0.18px] absolute h-6 left-[252px] top-[152px] max-md:w-[calc(100%_-_64px)] max-md:left-8 max-md:top-[120px] max-sm:w-[calc(100%_-_48px)] max-sm:text-base max-sm:left-6 max-sm:top-[90px]">
          Gerencie seus dados pessoais e preferências.
        </p>
      </header>

      {/* Sidebar navigation */}
     
      
      {/* Tab navigation */}
      <TabNavigation />
      
      {/* Profile section */}
      <ProfileHeader />
      
      {/* Personal information form */}
      <PersonalInfoForm />
      
      {/* Help button */}
      <HelpButton />
    </main>
  )
}
