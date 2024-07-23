interface TossResultProps {
  currentMatch: any;
}

export default function MatchStatus({ currentMatch }: TossResultProps) {
  return (
    <div className='my-4 text-center border-t border-b border-[#5E5E5E99] p-2' style={{ borderTopWidth: '0.5px', borderBottomWidth: '0.5px' }}>
      <span className='text-[#DA3400] text-left'>
        {currentMatch?.sStatusNote ? currentMatch?.sStatusNote : currentMatch?.oToss?.sText || "Match Will Start Soon..."}
      </span>
    </div>
  );
}