import Clipboard from 'clipboard';
import { FC, useEffect, useRef } from 'react';

import { EmojiData } from '../../model/IEmojiData';
import EmojiResultRow from './EmojiResultRow';
import './EmojiResults.css';
import { NoResults } from '../common/NoResults';

interface EmojiResultsProps {
    emojiData: Array<EmojiData>;
}

const EmojiResults: FC<EmojiResultsProps> = ({ emojiData }) => {
    const clipboard = useRef<Clipboard | null>(null);

    useEffect(() => {
        clipboard.current = new Clipboard('.copy-to-clipboard');

        return () => {
            clipboard.current?.destroy();
        };
    }, []);

    return (
        <div className="component-emoji-results">
            {emojiData.length === 0 && <NoResults />}
            {emojiData.length > 0 && emojiData.map((emoji: EmojiData) => <EmojiResultRow key={emoji.code} emoji={emoji} />)}
        </div>
    );
};

export default EmojiResults;