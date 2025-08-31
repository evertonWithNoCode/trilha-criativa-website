import { AppSidebar } from "@/components/AppSideBar"
import HelpButton from "@/components/HelpButton"

export default function CadastroPacientes() {
    return (
        <div className="flex bg-[#FFF2CC] ">

            <AppSidebar/>
            <HelpButton/>
            <div className="min-h-screen w-full  flex flex-col items-center">
                {/* Header */}
                <div className="w-full bg-[#FFFCF2]">
                    <div className="max-w-3xl mx-auto bg-[#FFFCF2] px-8 py-6">
                        <h1 className="text-3xl font-bold text-[#2D2D2D]">Cadastro</h1>
                        <p className="text-sm text-gray-500">
                            Gerencie os pacientes e acompanhe o progresso.
                        </p>
                    </div>
                </div>
                {/* Form */}
                <div className="w-full bg-[#FFF2CC]">
                    <div className="max-w-3xl mx-auto  bg-[#FFF2CC] rounded-md p-10 space-y-8">
                        {/* Informações básicas */}
                        <div>
                            <h2 className="text-lg font-semibold text-[#2D2D2D] mb-4">
                                Informações básicas
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="flex flex-col space-y-2">
                                    <label className="text-sm font-medium text-gray-700">
                                        Nome completo
                                    </label>
                                    <input
                                        type="text"
                                        defaultValue="Maria Santos Domingues"
                                        className="rounded-xl  px-3 py-2 text-sm"
                                    />
                                    <label className="text-sm font-medium text-gray-700">
                                        Data de nascimento
                                    </label>
                                    <input
                                        type="text"
                                        defaultValue="12/10/2017"
                                        className="rounded-xl  px-3 py-2 text-sm"
                                    />
                                    <label className="text-sm font-medium text-gray-700">Gênero</label>
                                    <input
                                        type="text"
                                        defaultValue="Feminino"
                                        className="rounded-xl  px-3 py-2 text-sm"
                                    />
                                </div>
                                {/* Foto */}
                                <div className="flex flex-col items-center justify-center">
                                    <div className="w-[160px] h-[160px] bg-white rounded-[65px]  flex items-center justify-center">
                                        <img src="/camera-01.png" alt="Câmera" />

                                    </div>
                                    <button className="mt-4 bg-[#FCE699] text-gray-800 text-normal font-bold px-4 py-2 rounded-md">
                                        Adicionar foto
                                    </button>
                                </div>
                            </div>
                        </div>
                        {/* Responsável */}
                        <div>
                            <h2 className="text-lg font-semibold text-[#2D2D2D] mb-4">
                                Responsável
                            </h2>
                            <div className="flex flex-col space-y-4">
                                <div>
                                    <label className="text-sm font-medium text-gray-700">
                                        Nome do responsável
                                    </label>
                                    <input
                                        type="text"
                                        defaultValue="Lúcia Santos Domingues"
                                        className="w-full rounded-xl  px-3 py-2 text-sm"
                                    />
                                </div>
                                <div>
                                    <label className="text-sm font-medium text-gray-700">
                                        E-mail do responsável
                                    </label>
                                    <input
                                        type="email"
                                        defaultValue="nome@email.com"
                                        className="w-full rounded-xl  px-3 py-2 text-sm"
                                    />
                                </div>
                            </div>
                        </div>
                        {/* Diagnóstico */}
                        <div>
                            <h2 className="text-lg font-semibold text-[#2D2D2D] mb-4">
                                Diagnóstico
                            </h2>
                            <textarea
                                placeholder="Diagnóstico"
                                className="w-full h-28 rounded-xl  px-3 py-2 text-sm"
                            />
                        </div>
                        {/* Botão */}
                        <div className="flex justify-start">
                            <button className="bg-[#FBBF24] hover:bg-[#f59e0b] transition-colors text-white font-medium px-6 py-2 rounded-md">
                                Concluir cadastro
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
