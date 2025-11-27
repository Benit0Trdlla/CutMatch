'use client';
import { Dropzone, DropzoneContent, DropzoneEmptyState } from '@/components/ui/shadcn-io/dropzone';
import { useState } from 'react';
const DragAndDrop = () => {
    const [files, setFiles] = useState<File[] | undefined>();
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
            <DropzoneEmptyState />
            <DropzoneContent />
        </Dropzone>
    );
};
export default DragAndDrop;