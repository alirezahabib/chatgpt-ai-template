import {
  Button,
  Flex,
  Link,
  Img,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import logoWhite from '../../../../public/img/layout/logoWhite.png';

export default function SidebarDocs() {
  const bgColor = 'linear-gradient(135deg, #868CFF 0%, #4318FF 100%)';
  const borderColor = useColorModeValue('white', 'navy.800');

  return (
    <Flex
      justify="center"
      direction="column"
      align="center"
      bg={bgColor}
      borderRadius="16px"
      position="relative"
    >
      <Flex
        border="5px solid"
        borderColor={borderColor}
        bg="linear-gradient(135deg, #868CFF 0%, #4318FF 100%)"
        borderRadius="50%"
        w="80px"
        h="80px"
        align="center"
        justify="center"
        mx="auto"
        position="absolute"
        left="50%"
        top="-47px"
        transform="translate(-50%, 0%)"
      >
        <Img src={logoWhite.src} w="40px" h="40px" />
      </Flex>
      <Flex
        direction="column"
        mb="12px"
        align="center"
        justify="center"
        px="15px"
        pt="55px"
      >
        <Text
          fontSize={{ base: 'lg', xl: '18px' }}
          color="white"
          fontWeight="bold"
          lineHeight="150%"
          textAlign="center"
          mb="14px"
          dir="rtl"
        >
          با نسخه‌ی پلاس بی‌نهایت استفاده کنید!
        </Text>
        <Text fontSize="14px" color={'white'} mb="14px" textAlign="center" dir="rtl">
          با خدمات هوش مصنوعی واژه‌شریف (vsharif) کسب و کار خود را رشد دهید.
        </Text>
      </Flex>
      <Link href="https://vsharif.me/contact" isExternal>
        <Button
          bg="whiteAlpha.300"
          _hover={{ bg: 'whiteAlpha.200' }}
          _active={{ bg: 'whiteAlpha.100' }}
          mb={{ sm: '16px', xl: '24px' }}
          color={'white'}
          fontWeight="regular"
          fontSize="sm"
          minW="185px"
          mx="auto"
          borderRadius="45px"
          dir="rtl"
        >
          خرید نسخه پلاس
        </Button>
      </Link>
    </Flex>
  );
}
