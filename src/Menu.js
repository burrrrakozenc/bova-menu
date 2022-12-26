import {useState} from 'react';
import {Document, Page,pdfjs } from 'react-pdf/dist/esm/entry.webpack';
import './assets/css/menu.css'
import {useWindowSize} from "./static";
import 'react-pdf/dist/esm/Page/TextLayer.css';
import file2 from './assets/files/qr aralik menu_compressed.pdf'


pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const Menu = () => {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    const onDocumentLoadSuccess = ({numPages}) => {
        setNumPages(numPages);
    };

    const sizes = useWindowSize()

    return (
        <div className="bg-black">
            <div className="pt-3 bg-black">
                <h2 className="text-white">
                    BOVA
                </h2>

                <h3 className="text-white">
                    MENU
                </h3>

                <div className=" d-flex justify-content-center align-items-center">
                    {sizes.width > 680
                        ?

                        <Document
                            file={file2}
                            onLoadSuccess={onDocumentLoadSuccess}
                        >
                            <Page pageNumber={pageNumber}/>
                        </Document>
                        :
                        <Document
                            file={file2}
                            onLoadSuccess={onDocumentLoadSuccess}
                        >
                            <Page pageNumber={pageNumber}/>
                        </Document>

                    }
                </div>
            </div>
        </div>
    );
};

export default Menu;