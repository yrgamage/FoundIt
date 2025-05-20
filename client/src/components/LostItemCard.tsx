import { Card, CardContent, CardMedia, Typography, Button, Chip, Box } from '@mui/material';
import { Message as MessageIcon } from '@mui/icons-material';

interface LostItemCardProps {
  title: string;
  imageUrl: string;
  date: string;
  status: 'found' | 'lost' | 'returned';
  description?: string;
  onContact?: () => void;
}

const LostItemCard = ({
  title,
  imageUrl,
  date,
  status,
  description = '',
  onContact
}: LostItemCardProps) => {
  const statusColors = {
    found: 'success',
    lost: 'error',
    returned: 'info'
  } as const;

  return (
    <Card sx={{ maxWidth: 345, m: 2 }}>
      <CardMedia
        component="img"
        height="140"
        image={imageUrl}
        alt={title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
          <Typography variant="body2" color="text.secondary">
            {new Date(date).toLocaleDateString()}
          </Typography>
          <Chip 
            label={status} 
            color={statusColors[status]} 
            size="small"
          />
        </Box>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 2 }}>
        <Button 
          variant="contained" 
          startIcon={<MessageIcon />}
          onClick={onContact}
          size="small"
        >
          Contact
        </Button>
      </Box>
    </Card>
  );
};

export default LostItemCard;