import ButtonInfo from "../components/ButtonInfo";

export default function Servicios() {
    return (
        <div
            id="servicios"
            className="bg-cover bg-no-repeat bg-center sm:my-10"
            style={{ backgroundImage: "url('./img/servicesBackground.jpg')" }}
        >
            <div className="h-auto shadow-lg flex flex-col items-center justify-center gap-5 xl:flex-row cursor-pointer">
                <div className="w-96 h-[600px] bg-green-50 my-3 rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
                    <p className="text-2xl text-center uppercase font-bold text-green-700 py-4 border-b-2 border-green-200">
                        Análisis de Suelo
                    </p>

                    <div className="px-6 py-4 h-[400px]">
                        <p className="text-center text-xl text-green-600 mb-4">Servicios Adicionales</p>
                        <ul className="list-disc space-y-2 text-green-700">
                            <li><span className="font-semibold">pH del Suelo:</span> Mide la acidez o alcalinidad.</li>
                            <li><span className="font-semibold">Nutrientes:</span> Evalúa nitrógeno, fósforo y potasio.</li>
                            <li><span className="font-semibold">Textura:</span> Determina arena, limo y arcilla.</li>
                            <li><span className="font-semibold">Contaminantes:</span> Detecta metales pesados y tóxicos.</li>
                            <li><span className="font-semibold">Terceros:</span> Pruebas avanzadas en laboratorios.</li>
                        </ul>
                    </div>

                    <div className="flex items-center justify-center py-4 bg-green-100 border-t-2 border-green-200">
                        <ButtonInfo />
                    </div>
                </div>

                <div className="w-96 h-[600px] bg-blue-50 my-3 rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 cursor-pointer">
                    <p className="text-2xl text-center uppercase font-bold text-blue-700 py-4 border-b-2 border-blue-200">
                        Área de Experimentación
                    </p>

                    <div className="px-6 py-4 h-[400px]">
                        <p className="text-center text-xl text-blue-600 mb-4">Servicios Disponibles</p>
                        <ul className="list-disc space-y-2 text-blue-700">
                            <li><span className="font-semibold">Investigación:</span> Prueba nuevas técnicas agrícolas.</li>
                            <li><span className="font-semibold">Demostración:</span> Muestra tecnologías emergentes.</li>
                            <li><span className="font-semibold">Monitoreo:</span> Analiza cultivos experimentales.</li>
                            <li><span className="font-semibold">Capacitación:</span> Talleres de nuevas metodologías.</li>
                            <li><span className="font-semibold">Colaboración:</span> Proyectos con instituciones.</li>
                        </ul>
                    </div>

                    <div className="flex items-center justify-center py-4 bg-blue-100 border-t-2 border-blue-200">
                        <ButtonInfo />
                    </div>
                </div>

                <div className="w-96 h-[600px] bg-orange-50 my-3 rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 cursor-pointer">
                    <p className="text-2xl text-center uppercase font-bold text-orange-700 py-4 border-b-2 border-orange-200">
                        Huertos
                    </p>

                    <div className="px-6 py-4 h-[400px]">
                        <p className="text-center text-xl text-orange-600 mb-4">Servicios y Beneficios</p>
                        <ul className="list-disc space-y-2 text-orange-700">
                            <li><span className="font-semibold">Producción Sostenible:</span> Cultivo en parcelas pequeñas.</li>
                            <li><span className="font-semibold">Educación:</span> Programas de horticultura.</li>
                            <li><span className="font-semibold">Comunidad:</span> Espacios de cooperación vecinal.</li>
                            <li><span className="font-semibold">Salud:</span> Fomento de alimentación saludable.</li>
                            <li><span className="font-semibold">Biodiversidad:</span> Promoción de especies vegetales.</li>
                        </ul>
                    </div>

                    <div className="flex items-center justify-center py-4 bg-orange-100 border-t-2 border-orange-200">
                        <ButtonInfo />
                    </div>
                </div>
            </div>
        </div>
    );
}
