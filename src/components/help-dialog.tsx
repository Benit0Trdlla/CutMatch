import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"

interface HelpDialogProps {
    open: boolean
    onOpenChange: (open: boolean) => void
}

export function HelpDialog({ open, onOpenChange }: HelpDialogProps) {
    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-md bg-zinc-900 border-zinc-800">
                <DialogHeader>
                    <DialogTitle className="text-white">¿Cómo usar CutMatch?</DialogTitle>
                </DialogHeader>
                <div className="text-zinc-400 space-y-4 pt-4">
                    <p>
                        <strong className="text-white">CutMatch</strong> te ayuda a encontrar el mejor corte de pelo según la
                        forma de tu cara.
                    </p>
                    <div className="space-y-2">
                        <p className="font-semibold text-white">Pasos:</p>
                        <ol className="list-decimal list-inside space-y-2 text-sm">
                            <li>Sube una foto clara de tu rostro</li>
                            <li>Selecciona tu género</li>
                            <li>Indica tu edad</li>
                            <li>Nuestra IA analizará la forma de tu cara</li>
                            <li>Recibirás recomendaciones personalizadas de cortes de pelo</li>
                        </ol>
                    </div>

                    <p className="text-sm">
                        <strong className="text-white">Consejo:</strong> Usa una foto con buena iluminación y tu rostro de frente
                        para mejores resultados.
                    </p>
                </div>
            </DialogContent>
        </Dialog>
    )
}
