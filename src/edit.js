import { __ } from '@wordpress/i18n';
import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';
import './editor.scss';

export default function Edit() {

	return (
		<div { ...useBlockProps({
      className: `uncommon-home-hover-reveal`
    }) }>
      <p className='label'>Home Hover Reveal Block: Link an image and a word to the same #tag to create a hover/reveal relationship.</p>
			<InnerBlocks 
        allowedBlocks={['core/image', 'core/heading', 'core/paragraph', 'core/group']}
        template={[
          ['core/heading', {
            className: 'uncommon-home-hover-reveal__title', 
            placeholder: 'Write your text here, highlight the words you want to show an image on hover, and add the image below in the same sequence as the words.'
          }],
          ['core/group', {
            className: 'uncommon-home-hover-reveal__images',
            anchor: 'images'
          }, [
            ['core/image'],['core/image'],['core/image'],['core/image'],['core/image'],['core/image']
          ]],
          ['core/heading']
        ]}
      />
		</div>
	);
}
