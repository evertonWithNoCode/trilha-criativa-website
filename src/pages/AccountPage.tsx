import  PersonalInfoForm  from "@/components/accountComponents/PersonalInfoForm";
import { TabNavigation } from "@/components/accountComponents/TabNavigation";
import { AppSidebar } from "@/components/AppSideBar";
import HelpButton from "@/components/HelpButton";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useAuth } from '@/contexts/AuthContext';

export function AccountPage() {
  return (
    <main className="w-full  min-h-screen bg-[#FFFCF2] flex">
      <AppSidebar />

      <div className="flex-col w-full">
        
        <TabNavigation className="pl-4 sm:pl-8 md:pl-[60px] lg:pl-[100px] xl:pl-[145px]" />
      </div>



      {/* Help button */}
      <HelpButton />
    </main>
  )
}
