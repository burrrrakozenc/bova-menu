import {useState} from 'react';
import {Document, Page} from 'react-pdf/dist/esm/entry.webpack';
import './assets/css/menu.css'
import {useWindowSize} from "./static";
import 'react-pdf/dist/esm/Page/TextLayer.css';
import {AiOutlineArrowLeft, AiOutlineArrowRight} from "react-icons/ai";
import file1 from '../public/bova_menu.pdf'
import file2 from '../public/bova_menu_mobile.pdf'

const Menu = () => {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    const onDocumentLoadSuccess = ({numPages}) => {
        setNumPages(numPages);
    };

    const goToPrevPage = () =>
        setPageNumber(pageNumber - 1 <= 1 ? 1 : pageNumber - 1);

    const goToNextPage = () =>
        setPageNumber(
            pageNumber + 1 >= numPages ? numPages : pageNumber + 1,
        );

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
                <nav>
                    <button onClick={goToPrevPage}>
                        <AiOutlineArrowLeft/>
                    </button>

                    <button onClick={goToNextPage}>
                        <AiOutlineArrowRight/>
                    </button>
                    <p className="text-white m-2">
                        Page {pageNumber} of {numPages}
                    </p>
                </nav>

                <div className=" d-flex justify-content-center align-items-center">
                    {sizes.width > 680
                        ?

                        <Document
                            file={file1}
                            onLoadSuccess={onDocumentLoadSuccess}
                        >
                            <Page pageNumber={pageNumber}/>
                        </Document>
                        :
                        <Document
                            file={file2}
                            // file="bova_menu_mobile.pdf"
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