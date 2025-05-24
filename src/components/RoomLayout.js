const RoomLayout = ({ title, description, doors, onSelectDoor }) => {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">{title}</h1>
        <p className="text-gray-300 mb-8">{description}</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {doors.map((door) => (
            <button
              key={door.color}
              onClick={() => onSelectDoor(door.color)}
              className={`p-6 rounded-lg transition-all hover:scale-105 ${
                door.disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'
              }`}
              style={{ backgroundColor: door.color }}
              disabled={door.disabled}
            >
              <span className="font-medium text-lg">{door.label}</span>
              {door.warning && (
                <p className="text-xs mt-2 text-white">{door.warning}</p>
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RoomLayout;