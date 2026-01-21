'use client';
import { Dropzone, DropzoneContent, DropzoneEmptyState } from '@/components/ui/shadcn-io/dropzone';
import { UploadIcon } from 'lucide-react';
import { useState } from 'react';
import { useTranslation } from '@/hooks/useTranslation';
const DragAndDrop = () => {
    const [files, setFiles] = useState<File[] | undefined>();
    const [filePreviewArray, setFilePreviewArray] = useState<string[]>([]);
    const { t } = useTranslation();

    const handleDrop = (files: File[]) => {
        console.log(files);
        setFiles(files);

        if (files.length > 0) {
            const previews: string[] = [];
            let loadedCount = 0;

            files.forEach((file) => {
                const reader = new FileReader();
                reader.onload = (e) => {
                    if (typeof e.target?.result === 'string') {
                        previews.push(e.target.result);
                    }
                    loadedCount++;
                    if (loadedCount === files.length) {
                        setFilePreviewArray(previews);
                    }
                };
                reader.readAsDataURL(file);
            });
        }
    };

    return (
        <Dropzone
            className='border-orange-app bg-transparent border-2 border-dashed text-orange-app hover:bg-[#FF8C42]/10 hover:text-white'
            accept={{ 'image/*': ['.png', '.jpg', '.jpeg'] }}
            maxFiles={3}
            onDrop={handleDrop}
            onError={console.error}
            src={files}
        >
            <DropzoneEmptyState >
                <div className="flex size-8 items-center justify-center rounded-md bg-muted text-muted-foreground">
                    <UploadIcon size={16} />
                </div>
                <p className="my-2 w-full truncate text-wrap font-medium text-sm">
                    {t.DRAG_AND_DROP.TITLE}
                </p>
                <p className="w-full truncate text-wrap text-muted-foreground text-xs">
                    {t.DRAG_AND_DROP.HOW_TO_UPLOAD_TEXT}
                </p>
                <p className="text-wrap text-muted-foreground text-xs">{t.DRAG_AND_DROP.ALLOWED_IMAGE}</p>
            </DropzoneEmptyState >
            <DropzoneContent>
                {filePreviewArray.length > 0 && (
                    <div className="relative h-48 w-100 p-4 mb-3">
                        {/* Dos imágenes en la base */}
                        <div className="absolute bottom-0 left-0 right-0 h-40 flex gap-2 px-4 pb-4">
                            {/* Primera imagen */}
                            {filePreviewArray[0] && (
                                <div className="flex-1 h-full rounded-md overflow-hidden">
                                    <img
                                        alt="Preview 1"
                                        className="h-full w-full object-cover"
                                        src={filePreviewArray[0]}
                                    />
                                </div>
                            )}
                            {/* Segunda imagen */}
                            {filePreviewArray[1] && (
                                <div className="flex-1 h-full rounded-md overflow-hidden">
                                    <img
                                        alt="Preview 2"
                                        className="h-full w-full object-cover"
                                        src={filePreviewArray[1]}
                                    />
                                </div>
                            )}
                        </div>

                        {/* Tercera imagen centrada y superpuesta */}
                        {filePreviewArray[2] && (
                            <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
                                <div className="h-32 w-32 rounded-md overflow-hidden shadow-lg mt-3">
                                    <img
                                        alt="Preview 3"
                                        className="h-full w-full object-cover"
                                        src={filePreviewArray[2]}
                                    />
                                </div>
                            </div>
                        )}
                    </div>
                )}
            </DropzoneContent>
        </Dropzone>
    );
};
export default DragAndDrop;