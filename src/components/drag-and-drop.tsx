'use client';
import { Dropzone, DropzoneContent, DropzoneEmptyState } from '@/components/ui/shadcn-io/dropzone';
import { UploadIcon } from 'lucide-react';
import { useState } from 'react';
import { useTranslation } from '@/hooks/useTranslation';
const DragAndDrop = () => {
    const [files, setFiles] = useState<File[] | undefined>();
    const { t } = useTranslation();
    const handleDrop = (files: File[]) => {
        console.log(files);
        setFiles(files);
    };
    return (
        <Dropzone
            className='border-orange-app bg-transparent border-2 border-dashed text-orange-app hover:bg-[#FF8C42]/10 hover:text-white '
            accept={{ 'image/*': [] }}
            maxFiles={3}
            maxSize={1024 * 1024 * 10}
            minSize={1024}
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
            <DropzoneContent />
        </Dropzone>
    );
};
export default DragAndDrop;