import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { useTranslation } from "@/hooks/useTranslation"

interface HelpDialogProps {
    open: boolean
    onOpenChange: (open: boolean) => void
}

export function HelpDialog({ open, onOpenChange }: HelpDialogProps) {
    const { t } = useTranslation()
    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-md bg-zinc-900 border-zinc-800">
                <DialogHeader>
                    <DialogTitle className="text-white">{t.DIALOG.TITLE}</DialogTitle>
                </DialogHeader>
                <div className="text-zinc-400 space-y-4 pt-2">
                    <p>
                        <strong className="text-white">{t.DIALOG.SUBTITLE.split(" ")[0]}</strong> {t.DIALOG.SUBTITLE.split(" ").slice(1).join(" ")}
                    </p>
                    <div className="space-y-2">
                        <p className="font-semibold text-white">{t.DIALOG.STEPS.LABEL}</p>
                        <ol className="list-decimal list-inside space-y-2 text-sm">
                            {t.DIALOG.STEPS.STEPS_LIST.map((step, index) => (
                                <li key={index}>{step}</li>
                            ))}
                        </ol>
                    </div>

                    <p className="text-sm">
                        <strong className="text-white">{t.DIALOG.ADVICE.LABEL}</strong> {t.DIALOG.ADVICE.TEXT}
                    </p>
                </div>
            </DialogContent>
        </Dialog>
    )
}
