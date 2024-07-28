import { useParams } from 'react-router-dom';
import * as DOMPurify from "dompurify";
import PageAPI from '../requests/pageAPI';
import { useEffect, useState } from 'react';
import Page from '../dtos/page';


export default function CustomMenu() {
    const params = useParams();
    const location = params.menu + "/" + params.subMenu

    const [content, setContent] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // TODO: 오류 처리
        PageAPI.Get(location).then(async (res) => {
            const page: Page = await res.json();
            if (page.content != null)
                setContent(page.content);
            else
                setContent('');
            setIsLoading(false);
        })
    }, [location]);

    // TODO: Fancy loading screen
    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <p dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(content), }} />
        </>
    );
}
